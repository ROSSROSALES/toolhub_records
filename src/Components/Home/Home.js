import './Home.css';

function Home() {

  return (
    <>
    <div className="Home">
      <header className="header">
        ToolHub
      </header>

      <div class="container">
        <div className="difficulty">
          <a href="/game" class='button' Style="background-color: #2DD22E"><span>Easy</span></a>
          <a href="/game" class='button' Style="background-color: #2E2DD2"><span>Medium</span></a>
          <a href="/game" class='button' Style="background-color: #D22E2D"><span>Hard</span></a>
        </div>
      </div>
      
    </div>
    </>
  );
};
export default Home;
