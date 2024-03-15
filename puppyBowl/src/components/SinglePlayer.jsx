import { useParams } from "react-router-dom";

const SinglePlayer = () => {
  const { id, name, breed, status } = useParams();

  return (
    <>
      <h1 className="header"> Single Player Page </h1>
      <div className="container">
        <h3 className="h3">Single Player Id: {id}</h3>
        <div className="details">
          <ul>
            <li>Player Id : {id}</li>
            <li>Player Name : {name}</li>
            <li>Player breed : {breed}</li>
            <li>Player status : {status}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SinglePlayer;

// const fetchSinglePlayer = async () => {
//   try {
//     const response = await fetch(APIURL + `players/${id}`);
//     const player = await response.json();
//     console.log(player);
//   } catch (err) {
//     console.error(`Oh no, trouble fetching player #${id}!`, err);
//   }
// };
// fetchSinglePlayer();

{
  /* <div>
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
        </div> */
}
