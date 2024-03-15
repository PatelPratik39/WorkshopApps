import { useEffect, useState } from "react";
import "../App.css";
import { getAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  const navigate = useNavigate();
  
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllPlayersHandler() {
      try {
        const playersData = await getAllPlayers();
        setIsLoading(true);
        setPlayers(playersData);
      } catch (error) {
        setIsLoading(true);
        setError(error);
      }
    }

    getAllPlayersHandler();
  }, []);

  if (error) {
    return <p className="errorMessage"> Error : {error.message}</p>;
  } else if (!isloading) {
    return <p className="errorMessage"> Loading Players ..... !!</p>;
  } else {
    return (
      <>
      <h2 className="header"> Welcome to the Puppy Bowl Page </h2>
        <div>
          {players.map((player) => {
            const { id, name, breed, status, imageUrl } = player;
            return (
              <div key={id} className="puppy-player-container">
                <div className="row">
                  {/* <div className="col-lg-7">
                    <ul className="details">
                      <li>Player Id : {id}</li>
                      <li>Player Name : {name}</li>
                      <li>Player breed : {breed}</li>
                      <li>Player status : {status}</li>
                    </ul>
                  </div> */}
                  <img src={imageUrl} alt="playerImage" onClick={() => {navigate(`player/${id}`)}}/>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default AllPlayers;
