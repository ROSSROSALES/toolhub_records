import './Game.css';
import { Tool_data } from '../Data/Tool_data';
import LanguageDropDown from '../Data/Dropdown/Language'

function Game() {
  const data = Tool_data;

  return (
    <>
    <div className="Game">
      <header className="header">
        Game
      </header>

      <div className="tool-name">
          {data[0].name} 
        </div>

      <div className="container-interact">
        
        <div className="missing-info">
          <div class='item'>
            {data[0]['missing_fields'][1]} <input type="text"></input>
          </div>
          <div class='item'>
            {'API Link'} <input type="text"></input>
          </div>
          <div class='item'>
            {data[0]['missing_fields'][2]} <input type="text"></input>
          </div>
          <div class='item'>
            {data[0]['missing_fields'][3]} <LanguageDropDown />
          </div>
          <div class='item'>
            {data[0]['missing_fields'][4]} <LanguageDropDown />
          </div>

          {/* {data[0]['missing_fields'].map((tool) => {
            return (
              <div>
                {tool}
              </div>
            )})} */}
            
        </div>

        <div class="button-wrapper">
          <div>
            <button class="gamebutton" Style="background-color: #FF8300"><span>Submit</span></button>
          </div>
          <div>
            <button class="gamebutton" Style="background-color: #007CFF"><span>Next Tool</span></button>
          </div>
        </div>
      </div>

      <div class="webpage resizer ugly">
        <iframe class="resized" src="https://citationhunt.toolforge.org/en?id=9d0b5e5e&cat=09024bc4"   title="Iframe Example"></iframe>
      </div>

    </div>
    </>
  );
};
export default Game;
