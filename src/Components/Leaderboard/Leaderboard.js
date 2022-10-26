import './Leaderboard.css';
import PlayerCard from './Player/PlayerCard';
import { Leaderboard_data } from "../Data/Leaderboard_data"

function Leaderboard() {
  const data = Leaderboard_data;
  return (
    <>
    <div className="Leaderboard">

          <header className="header">
              Leaderboard
          </header>

          <div className='content'>
            {data
              .sort( (a,b) => a.points > b.points ? -1 : 1) // Sorts points, Descending from highest point player
              .map((Player) => {
                return (
                  <>
                    <PlayerCard Player={Player} />
                  </>);
            })}
          </div>

      </div>
      </>
  );
};
export default Leaderboard;
