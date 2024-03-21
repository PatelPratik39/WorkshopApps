import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPlayer = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/";
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: ""
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
    // console.log(name, value);
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
              placeholder="Enter Player's Name "
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
              placeholder="Enter Player's Breed"
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
              placeholder="Select only one option : field / bench"
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
              placeholder="Enter Link/URL of Image"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary button btn-lg"
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
