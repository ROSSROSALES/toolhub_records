import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </header>
        </div>
  );
};
export default Home;
