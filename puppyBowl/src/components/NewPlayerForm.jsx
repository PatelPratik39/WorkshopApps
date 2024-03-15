
import { useNavigate } from 'react-router-dom';


const NewPlayerForm = () => {
    const navigate = useNavigate()
    
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
          <button onClick={addNewPlayer}>Add Player</button>
        </div>
      </>
    );
}
 
export default NewPlayerForm;