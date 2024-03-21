import { useEffect, useState } from "react";
import "../App.css";
import { getAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const AllPlayers = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchPlayer, setSearchPlayer] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete Method

  const handleDelete = async (id) => {
    try {
      const response = await fetch(APIURL + `/players/${id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      if (result.success) {
        alert("Player deleted successfully!");
        window.location.reload();
      } else {
        alert(setErrorMessage());
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred while deleting player.");
      setSuccessMessage("");
    }
  };

  if (error) {
    return <p className="errorMessage"> Error : {error.message}</p>;
  } else if (!isloading) {
    return <p className="errorMessage"> Loading Players ..... !!</p>;
  } else {
    return (
      <>
        <div>
          <h2 className="header">
            👋🏻 Welcome to All Players of the Puppy Bowl 👋🏻{" "}
          </h2>
        </div>
        <div>
          <div className="mb-4 container">
            <h2 className="h2Header">Search your Player 🔎 : </h2>
            <input
              type="text"
              className="searchInput"
              placeholder="Search your Player"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <hr />
          {filteredPlayers.map((player) => {
            const { id, name, imageUrl } = player;
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
                    <div className="imageHeader">
                      <ul>
                        <li key={id}>Name: {name}</li>
                      </ul>
                    </div>
                    <div className="container-fluid">
                      <button
                        className=" btn btn-lg btn-warning button"
                        onClick={() => {
                          navigate(`players/${id}`);
                        }}
                      >
                        {" "}
                        Details{" "}
                      </button>
                      <button
                        className=" btn btn-lg btn-primary button"
                        onClick={() => {
                          navigate(`players/${id}`);
                        }}
                        // onClick={() => handleUpdate(id)}
                      >
                        {" "}
                        Update{" "}
                      </button>
                      <button
                        className=" btn btn-lg btn-danger button"
                        onClick={() => handleDelete(id)}
                      >
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
