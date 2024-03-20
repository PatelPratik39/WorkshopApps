import "../App.css";
import { useState, useEffect } from "react";

const Search = (id) => {
  const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/players";
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect( () => {
    async function fetchPlayer() {
        const response = await fetch(`${APIURL}?query=${query}`);
        const data = await response.json();
        setPlayers(data.results)
    }
    fetchPlayer();
  },[query])


  return (
    <>
      <div className="searchContainer">
        <h2>Search your Player 🔎 :</h2>
        <input
          type="text"
          className="searchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
