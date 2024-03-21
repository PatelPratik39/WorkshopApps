import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SinglePlayer = () => {
  const [singlePlayers, setSinglePlayers] = useState("");

  // Hooks section
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

  // HanDLE DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      const response = await fetch(APIURL + `/players/${id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      if (result.success) {
        alert("Player deleted successfully!");
        // navigate("/");
        navigate("/");
        window.location.reload();
        // Additional logic if needed after successful deletion
      } else {
        alert("Having Difficulty to deleted Player !");

        navigate("/");
        window.location.reload();
      }
      //  window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Having Difficulty to deleted Player !");
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
        <div className="container-fluid">
          <button
            className=" btn btn-warning button btn-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
          <button
            className=" btn btn-danger btn-lg button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
          <button
            className=" btn btn-success btn-lg button"
            onClick={() => {
              navigate(`/updatePlayer/${id}`);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePlayer;
