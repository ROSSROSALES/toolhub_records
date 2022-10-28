import './Game.css';
import { Tool_data } from '../Data/Tool_data';

function Game() {
  const data = Tool_data;

  return (
    <>
    <div className="Game">
      <header className="header">
        Game
      </header>

      <div class="container">

        <div className="tool-name">
          {data[0].name} 
        </div>

        <div className="missing-info">
          <div class='item'>
            {data[0]['missing_fields'][1]} <input type="text"></input>
          </div>
          <div class='item'>
            {data[0]['missing_fields'][2]} <input type="text"></input>
          </div>
          <div class='item'>
            {data[0]['missing_fields'][3]}
          </div>
          <div class='item'>
            {data[0]['missing_fields'][4]}
          </div>

          {/* {data[0]['missing_fields'].map((tool) => {
            return (
              <div>
                {tool}
              </div>
            )})} */}
        
        <div class="webpage resizer ugly">
          <iframe class="resized" src="https://webflow.com/made-in-webflow/website/True-Responsive-Testing"   title="Iframe Example"></iframe>
        </div>

        <button class="gamebutton" Style="background-color: #007CFF"><span>Next Tool</span></button>
        
        </div>
      </div>

    </div>
    </>
  );
};
export default Game;
