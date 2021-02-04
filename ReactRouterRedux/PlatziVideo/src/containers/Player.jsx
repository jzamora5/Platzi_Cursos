import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Player.scss";

const Player = () => {
  return (
    <div className="player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>
      <div className="Player-back">
        <Link to="/">
          <button type="button">Regresar</button>
        </Link>
      </div>
    </div>
  );
};

export default Player;
