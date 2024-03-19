import { useEffect, useState } from "react";
import "../App.css";
import { getAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  const navigate = useNavigate();
  // const history = useHistory();

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

  // update method
  const handleUpdate = () => {
    // Implement update logic here (e.g., make an API call to update the record)
    // This function will be triggered when the Update button is clicked
    console.log("Update record:", formData);
    setSuccessMessage("Record updated successfully!");
    setErrorMessage("");
  };

  // Delete Method

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
      // history.push("/"); // Navigate to the home page route
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
                      <button
                        className=" btn btn-primary button"
                        onClick={handleUpdate}
                      >
                        {" "}
                        Update{" "}
                      </button>
                      <button
                        className=" btn btn-danger button"
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
