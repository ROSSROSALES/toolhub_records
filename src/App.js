
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

          <Routes>
            
            <Route path="/" element={ <Home /> }>
            </Route>

            <Route path="/" element={ <Home /> }>
            </Route>

          </Routes>
          
      </Router>
    </>
  );
}

export default App;
