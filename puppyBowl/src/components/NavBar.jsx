import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddPlayer from "../components/AddPlayer";
import AllPlayers from "./AllPlayers";
import AddPlayer from './AddPlayer';

const NavBar = () => {
  return (
    <>
      <div>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/players">AllPlayers</Link>
          <Link to="/players/:id">Single Player</Link>
        </nav> */}

        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Puppy Bowl
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/addPlayer" onClick={() => {navigate}}>
                  Add Player
                </a>
                <a className="nav-link" href="/singlePlayer/:id">
                  Single Player
                </a>
              </div>
              <h1 className="navHeader"> 🐶 Puppy Bowl 🐶</h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
