import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPlayer from "./AllPlayer";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">AllPlayer</Link>
        <Link to="/player">Single Player</Link>
      </nav>
    </>
  );
};

export default NavBar;
