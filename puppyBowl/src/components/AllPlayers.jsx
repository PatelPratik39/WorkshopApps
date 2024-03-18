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
        <h2 className="header">
          👋🏻 Welcome to All Players of the Puppy Bowl 👋🏻{" "}
        </h2>
        <div>
          {players.map((player) => {
            const { id, name, breed, status, imageUrl } = player;
            return (
              <div key={id} className="puppy-player-container">
                <div className="row">
                  <div className="col-xl-12">
                    <img
                      src={imageUrl}
                      alt="playerImage"
                      key={`${String(id)}-${name}`}
                      onClick={() => {
                        navigate(`players/${id}`);
                      }}
                    />
                    <div className="container-fluid">
                      <button
                        className=" btn btn-warning button"
                        onClick={() => {
                          navigate(`players/${id}`);
                        }}
                      >
                        {" "}
                        Details{" "}
                      </button>
                      <button className=" btn btn-primary button" >
                        {" "}
                        Update{" "}
                      </button>
                      <button className=" btn btn-danger button">
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                    <hr />
                  </div>
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
