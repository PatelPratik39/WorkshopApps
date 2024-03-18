
import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RemovePlayer = () => {
  const { id } = useParams();

  return (
    <>
      <h2 className="header"> Removed Players </h2>
      <div>
        <h2>Removing single Player : {singlePlayers.id}</h2>
      </div>
    </>
  );
};

export default RemovePlayer;
