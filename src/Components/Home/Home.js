import './Home.css';

function Home() {

  return (
    <>
    <div className="Home">
      <header className="header-home">
        ToolHub
      </header>

      <div class="container">
        <div className="difficulty">
          
          <a href="/game" class='button' Style="background-color: #2DD22E">
            <span>Easy</span>
            <div className="subtitle">
              1 - 4 missing
            </div>
            <div className="points">
              1 point
            </div>
          </a>
          <a href="/game" class='button' Style="background-color: #2E2DD2">
            <span>Medium</span>
            <div className="subtitle">
              5 - 9 missing
            </div>
            <div className="points">
              2 points
            </div>
          </a>
          <a href="/game" class='button' Style="background-color: #D22E2D">
            <span>Hard</span>
            <div className="subtitle">
              > 10 missing
            </div>
            <div className="points">
                4 points
            </div>
            
          </a>
        </div>
      </div>

    </div>
    </>
  );
};
export default Home;
