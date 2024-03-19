import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import Alert from "react-bootstrap/Alert";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPlayer = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

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
      //  window.location.reload();
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
    if (
      formData.name === "" ||
      formData.breed === "" ||
      formData.status === "" ||
      formData.status === ""
    ) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation for status field
    if (formData.status !== "field" && formData.status !== "bench") {
      setErrorMessage('Status field must be either "field" or "bench".');
      setSuccessMessage("");
      return; // Stop further processing
    }

    // Check if all fields are populated
    if (
      !formData.name ||
      !formData.breed ||
      !formData.status ||
      !formData.imageUrl
    ) {
      setErrorMessage("Please fill out all fields."); // Set error message if any field is empty
      setSuccessMessage(""); // Clear any previous success message
      return; // Stop further processing
    }
    // If all fields are populated and status field is valid, show success message
    setSuccessMessage("Form submitted successfully!");
    setErrorMessage(""); // Clear any previous error message
  };

  return (
    <>
      <h2 className="header">📝 Add New Player Form 📝 </h2>
      {/* Success and Failure Messages */}
      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage("Form submitted successfully!")}
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert
          variant="danger"
          onClose={() => setErrorMessage("Please fill out all fields.")}
        >
          {errorMessage}
        </Alert>
      )}

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
              required
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
              required
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
              required
              value={formData.status}
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
              required
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary button"
            onClick={() => addPlayer(formData)}
            disabled={isSubmitDisabled}
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

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (formData.status !== "field" || formData.status !== "bench") {
//     setErrorMessage('Status field must be either "field" or "bench".');
//     setSuccessMessage("");
//     return; // Stop further processing
//   }
//   if (formData.name && formData.breed && formData.status) {
//     setSuccessMessage("Form submitted successfully!");
//     setErrorMessage(""); // Clear any previous error message
//   } else {
//     setErrorMessage("Please fill out all fields."); // Set error message if validation fails
//     setSuccessMessage(""); // Clear any previous success message
//   }
//   // alert( players.id  + "Successfully added in list");
//   // console.log(formData);
// };

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
