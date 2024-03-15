import { getAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const RemovePlayer = () => {
  const { id } = useParams();
  return (
    <>
      <h2 className="header"> Removed Players </h2>
      <div>
        <h2>Removing single Player : {id}</h2>
      </div>
    </>
  );
};

export default RemovePlayer;
