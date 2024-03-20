import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePlayer = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  const navigate = useNavigate();
  const { id } = useParams();
  const [players, setPlayers] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: ""
  });

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(APIURL + `/players/${id}`);
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayers({ ...players, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(APIURL + `/players/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(players)
      });
      if (!response.ok) {
        throw new Error("Failed to update player");
      }
      navigate(`/players/${id}`);
    } catch (error) {
      console.error("Error updating player:", error);
      alert(error);
      navigate("/");
    }
  };

  return (
    <>
      <h1 className="header"> Update Player 📝 {id}</h1>
      <div className="container ">
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              placeholder="Enter Player's Name "
              value={players.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="breed" className="form-label">
              Breed :
            </label>
            <input
              type="text"
              className="form-control"
              id="breed"
              required
              placeholder="Enter Player's Breed"
              name="breed"
              value={players.breed}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status :
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              required
              placeholder="Select only one option : field / bench"
              value={players.status}
              onChange={handleChange}
            />
          </div>
          {/* imageURL */}
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Image URL :
            </label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              placeholder="Enter Link/URL of Image"
              value={players.imageUrl}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary button btn-lg">
            Update Player
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatePlayer;
