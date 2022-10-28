
import Nav from "./Components/Nav/Nav"
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Records from "./Components/Records/Records";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Nav />
      <Router>

          <Routes>
            
            <Route path="/" element={ <Home /> }>
            </Route>

            <Route path="/Game" element={ <Game /> }>
            </Route>

            <Route path="/Leaderboard" element={ <Leaderboard /> }>
            </Route>

            <Route path="/Records" element={ <Records /> }>
            </Route>

          </Routes>
          
      </Router>
    </>
  );
}

export default App;
