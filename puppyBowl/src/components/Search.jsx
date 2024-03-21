import React, { useState, useEffect } from "react";

const Search = () => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT";
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error("Failed to fetch players");
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayers();
  }, [players]);

  const findPlayer = players.filter((player) => {
    return player.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      {/* <div onSubmit={handleSubmit}> */}
        <div className="searchContainer">
          <h2>Search your Player 🔎 : </h2>
          <input
            type="text"
            className="searchInput"
            placeholder="Please Enter Player Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ul>
            {findPlayer.map((players) => (
              <li key={players.id}>{players.name}</li>
            ))}
          </ul>
        </div>
      {/* </div> */}
    </>
  );
};

export default Search;

// import React, { useState, useEffect } from "react";

// export default function AllPlayers() {
//   const [players, setPlayers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function getAllPlayersHandler() {
//       try {
//         const playersData = await getAllPlayers();
//         setIsLoading(true);
//         setPlayers(playersData);
//       } catch (error) {
//         setIsLoading(true);
//         setError(error);
//       }
//     }

//     getAllPlayersHandler();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredPlayers = players.filter((player) =>
//     player.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   } else if (!isLoading) {
//     return <p>Loading...</p>;
//   } else {
//     return (
//       <>
//         <div className="allPlayersContainer">
//           <h1>2024 Roster</h1>
//         </div>

//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />

//         {filteredPlayers.map((player) => {
//           const { id, name, breed, status, imageUrl } = player;

//           return (
//             <div className="puppy-player-container" key={id}>
//               <ul id="bullet-list">
//                 <li>Id: {id}</li>
//                 <li>Name: {name}</li>
//                 <li>Breed: {breed}</li>
//                 <li>Status: {status}</li>
//               </ul>

//               <button
//                 className="details-button"
//                 onClick={() => navigate(`/players/${id}`)}
//               >
//                 See Details
//               </button>

//               <img src={imageUrl} alt="player" />
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }