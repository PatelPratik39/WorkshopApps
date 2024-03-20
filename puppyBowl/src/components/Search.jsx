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
    }
    fetchPlayers();
  }, []);

  const findPlayer = players.filter((player) => {
    return player.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
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
          {findPlayer.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
