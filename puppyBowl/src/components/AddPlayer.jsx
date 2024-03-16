import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPlayer = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: ""
  });

  const addPlayer = async (player) => {
    try {
      console.log(player);
      const response = await fetch(APIURL + "players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
      });
      await response.json();
      navigate("/");
    } catch (error) {
      console.error(
        "Oops, something went wrong with adding that player!",
        error
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const  players  = e.target.value;
    // console.log(players);
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert( players.id  + "Successfully added in list");
    console.log(formData);
  };
  return (
    <>
      <h2 className="header"> Add new Player Form 📝 </h2>
      <div className="container ">
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="breed" className="form-label">
              Breed :
            </label>
            <input
              type="text"
              className="form-control"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="status" className="form-label">
              Status :
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary button"
            onClick={() => addPlayer(formData)}
          >
            Add Player
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPlayer;

{
  /* onClick={() => navigate("/players/" + formData)} */
}

// import { useNavigate } from "react-router-dom";
// import { getAllPlayers } from "../API/index.js";

// const AddPlayer = async () => {
//   const navigate = useNavigate();

//   try {
//     const response = await fetch(APIURL + "players", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ name: newPlayerName, team: newPlayerTeam })
//     });
//     await response.json();
//     fetchAllPlayers();
//     setNewPlayerName("");
//     setNewPlayerTeam("");
//   } catch (error) {
//     console.error("Oops, something went wrong with adding that player!", error);
//   }

//   return (
//     <>
//       <h2> New Players Form Page</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Player Name"
//           value={newPlayerName}
//           onChange={(e) => setNewPlayerName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Team Name"
//           value={newPlayerTeam}
//           onChange={(e) => setNewPlayerTeam(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             navigate("/addPlayer");
//           }}
//         >
//           Add Player
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddPlayer;
