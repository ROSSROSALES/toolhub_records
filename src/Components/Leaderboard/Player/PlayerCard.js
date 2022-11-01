import React from "react";
import "./PlayerCard.css";


function PlayerCard({ Player }) {
  return (
    <div className="Player-card">

      <div className="Player-name">
        <p>{Player.name}</p>
        <div className="Player-badges">
          <p>Badges: 
            {Player.badges.map((badge) => {
              return (
              <img class="badge" alt="player badges" src={badge} />
              )
            }
            )
            }
              {/* <img class="badge" src={Player.badges} />
              <img class="badge" src={Player.badges} /> */}
          </p>
        </div>
      </div>


      <div className="Player-points">
        <p>{Player.points}</p>
      </div>



    </div>
  );
}

export default PlayerCard;
