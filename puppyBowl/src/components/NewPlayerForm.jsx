import { useNavigate } from "react-router-dom";
// import AddPlayer from './AddPlayer';
import { getAllPlayers } from "../API/index.js";

const NewPlayerForm = async () => {
  const navigate = useNavigate();

  try {
    const response = await fetch(APIURL + "players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: newPlayerName, team: newPlayerTeam })
    });
    await response.json();
    fetchAllPlayers();
    setNewPlayerName("");
    setNewPlayerTeam("");
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }

  return (
    <>
      <h2> New Players Form Page</h2>
      <div>
        <input
          type="text"
          placeholder="Player Name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Name"
          value={newPlayerTeam}
          onChange={(e) => setNewPlayerTeam(e.target.value)}
        />
        <button
          onClick={() => {
            navigate("/addPlayer");
          }}
        >
          Add Player
        </button>
      </div>
    </>
  );
};

export default NewPlayerForm;
