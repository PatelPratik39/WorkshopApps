import React from "react";
import { useState } from "react";


const AddPlayer = () => {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        status: ''
    });
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <>
      <h2 className="header"> Add new Player Form 📝 </h2>
      <div className="container ">
        <form className="form" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name :
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="breed" class="form-label">
              Breed :
            </label>
            <input
              type="text"
              class="form-control"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="status" class="form-label">
              Status :
            </label>
            <input
              type="text"
              class="form-control"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add Player
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPlayer;

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
