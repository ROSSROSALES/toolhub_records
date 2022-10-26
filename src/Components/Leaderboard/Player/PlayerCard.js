import React from "react";
import "./PlayerCard.css";


function PlayerCard({ Player }) {
  return (
    <div className="Player-card">

      <div className="Player-name">
        <p>{Player.name}</p>
      </div>

      <div className="Player-points">
        <p>{Player.points}</p>
      </div>

    </div>
  );
}

export default PlayerCard;
