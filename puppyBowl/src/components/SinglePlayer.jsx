import { useParams } from "react-router-dom";

const SinglePlayer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchSinglePlayer = async () => {};

  return (
    <>
      <h1> Single Players Page </h1>
      <div>
        <h2>Single Player Id: {id}</h2>
        <div>
          {players.map((player) => {
            const { id, name, breed, status, imageUrl } = player;
            return (
              <div key={id} className="puppy-player-container">
                <div className="row">
                  <div className="col-lg-7">
                    <ul className="details">
                      <li>Player Id : {id}</li>
                      <li>Player Name : {name}</li>
                      <li>Player breed : {breed}</li>
                      <li>Player status : {status}</li>
                    </ul>
                  </div>
                  <img
                    src={imageUrl}
                    alt="playerImage"
                    onClick={() => {
                      navigate(`player/${id}`);
                    }}
                  />
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SinglePlayer;
