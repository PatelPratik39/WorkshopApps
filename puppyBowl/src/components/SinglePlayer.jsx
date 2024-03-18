import { useParams } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SinglePlayer = () => {
  const [singlePlayers, setSinglePlayers] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(APIURL + `players/${id}`);
        const player = await response.json();
        console.log(player);

        const singlePlayers = player.data.player;
        setSinglePlayers(singlePlayers);
      } catch (err) {
        console.error(`Oh no, trouble fetching player ${id}!`, err);
      }
    };
    fetchSinglePlayer();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(APIURL + `/players/${id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      if (result.success) {
        setSuccessMessage("Player deleted successfully!");
        setErrorMessage("");
        // Additional logic if needed after successful deletion
      } else {
        setErrorMessage("Failed to delete player.");
        setSuccessMessage("");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred while deleting player.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <h1 className="header"> Single Player Page </h1>
      <div className="container">
        <h3 className="h3">Single Player # : {id}</h3>
        <div className="details">
          <ul className="list">
            <li>Player Id : {id}</li>
            <li>Player Name : {singlePlayers.name}</li>
            <li>Player breed : {singlePlayers.breed}</li>
            <li>Player status : {singlePlayers.status}</li>
          </ul>
        </div>
        <div>
          <button
            className=" btn btn-danger button"
            onClick={() => {
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePlayer;

// const fetchSinglePlayer = async () => {
//   try {
//     const response = await fetch(APIURL + `players/${id}`);
//     const player = await response.json();
//     console.log(player);
//   } catch (err) {
//     console.error(`Oh no, trouble fetching player #${id}!`, err);
//   }
// };
// fetchSinglePlayer();

// {
/* <div>
            {players.map((player) => {
              const { id, name, breed, status, imageUrl } = player;
              return (
                <div key={id} className="puppy-player-container">
                  <div className="row">
                    <div className="col-lg-7">
                      <ul className="details">
                        <li>Player Id : {id}</li>
                        <li>Player Name : {name}</li>
                        <li>Player breed : {breed}</li>
                        <li>Player status : {status}</li>
                      </ul>
                    </div>
                    <img
                      src={imageUrl}
                      alt="playerImage"
                      onClick={() => {
                        navigate(`player/${id}`);
                      }}
                    />
                    <hr />
                  </div>
                </div>
              );
          })}
        </div> */
// }
