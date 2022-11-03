import './Game.css';
import { Tool_data } from '../Data/Tool_data';
import LanguageDropDown from '../Data/Dropdown/Language'
import { useRef } from 'react';



function Game() {
  const data = Tool_data;

  // example for each input field to store and reset as a state
  const privacy_policy_url = useRef(null);
  const bugtracker_url = useRef(null);
  const translate_url = useRef(null);
  const feedback_url = useRef(null);
  const api_url = useRef(null);
  const developer_docs_url = useRef(null);
  

  // input fields submitted
  function handleSubmit(event) {
    console.log('This is Submitted',
      privacy_policy_url.current.value,
      bugtracker_url.current.value,
      translate_url.current.value,
      feedback_url.current.value,
      api_url.current.value,
      developer_docs_url.current.value,
      );
    event.preventDefault();

    // clear all input values in the form
    event.target.reset();
  };

  return (
    <>
    <div className="Game">
      <header className="header">
        Game
      </header>

      <div className="tool-name">
          {data[0].name} 
        </div>

      <div className="example">
        *below* shows a tool's missing fields
      </div>

      <div className="example2">
        *below* buttons: submit filled in info, or go to next/skip tool
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container-interact">
          <div className="missing-info">
            <div class='item'>
              {data[0]['missing_fields'][1]}<br></br>
              <input ref={privacy_policy_url} type="text" placeholder="URL Here" ></input>
            </div>
            <div class='item'>
              {data[0]['missing_fields'][10]}<br></br>
              <input ref={bugtracker_url} type="text" placeholder="URL Here"></input>
            </div>
            <div class='item'>
              {data[0]['missing_fields'][2]}<br></br>
              <input ref={translate_url} type="text" placeholder="URL Here"></input>
            </div>
            <div class='item'>
              {data[0]['missing_fields'][4]}<br></br>
              <input ref={feedback_url} type="text" placeholder="URL Here"></input>
            </div>
            <div class='item'>
              {data[0]['missing_fields'][5]}<br></br>
              <input ref={api_url} type="text" placeholder="URL Here"></input>
            </div>
            <div class='item'>
              {data[0]['missing_fields'][8]}<br></br>
              <input ref={developer_docs_url} type="text" placeholder="URL Here"></input>
            </div>
            <div class='item'>
              {data[0]['missing_fields'][13]}<br></br>
              <LanguageDropDown />
            </div>
            <div class='item'>
              {data[0]['missing_fields'][9]}<br></br>
              <LanguageDropDown />
            </div>
          {/* Commented out line of code is to map the number of missing fields from the data call.
          For this example, I have hard coded the list of missing fields to visualize. */}
          {/* {data[0]['missing_fields'].map((tool) => {
            return (
              <div>
                {tool}
              </div>
            )})} */}
          </div>

          <div class="button-wrapper">
            <div>
              <button class="gamebutton" Style="background-color: #FF8300" type="submit"><span>Submit</span></button>
            </div>
            <div>
              <button class="gamebutton" Style="background-color: #007CFF"><span>Next Tool</span></button>
            </div>
          </div>
        </div>
      </form>

      <div className="example">
          *below* is example tool page to find missing field information. ie: can copy and paste links
      </div>

      {/* iframe webpage is resizeable, below is an example of a tool's page to show */}
      <div class="webpage resizer ugly">
        <iframe class="resized" src="https://commons.wikimedia.org/wiki/Commons:CropTool#Setup"   title="Iframe Example"></iframe>
      </div>

    </div>
    </>
  );
};
export default Game;
