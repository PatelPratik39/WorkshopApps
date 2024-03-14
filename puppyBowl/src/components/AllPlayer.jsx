import { useEffect, useState } from "react";
import "../App.css";

const AllPlayer = () => {
  const cohortName = "2311-FTB-MT-WEB-PT";
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllPlayers() {
      try {
        const playerResponse = await fetch(APIURL + "players");
        const result = await playerResponse.json();
        console.log(result);
        setPlayers(result); // Update players state with fetched data
        setIsLoading(false); // Set isLoading to false after fetching data
        // return result;      This is unnecessary  return statment

      } catch (error) {
        console.log("Uh oh, trouble fetching players!", error);
        setError(error);
        setIsLoading(false); // Set isLoading to false if there's an error
      }
    }
    getAllPlayers();
  }, []);
  //   check if any error
  if (error) {
    return <p className="errorMessage">Error : {error.message}</p>;
  } else if (!isloading) {
    return <p className="errorMessage"> Loading Players ..... !!</p>;
  } else {
    return (
      <>
        <div>
          {players.map((player) => {
            const { id, name, breed, status, imageUrl } = player;
            return (
              <div key={id} className="puppy-player-container">
                <ul>
                  <li>Player Id : {id}</li>
                  <li>Player Name : {name}</li>
                  <li>Player breed : {breed}</li>
                  <li>Player status : {status}</li>
                </ul>
                <img src={imageUrl} alt="playerImage" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default AllPlayer;



