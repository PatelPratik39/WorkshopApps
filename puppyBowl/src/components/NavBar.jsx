import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body fixed-top"
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
                <a
                  className="nav-link"
                  href="/addPlayer"
                  onClick={() => {
                    navigate("/addPlayer");
                  }}
                >
                  Add Player
                </a>
                <a
                  className="nav-link"
                  href="/updatePlayer"
                  onClick={() => {
                    navigate("/updatePlayer");
                  }}
                >
                  Update Player
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
