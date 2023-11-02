import AddScouts from "./AddScouts";
import "./App.css";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/Form">Scan Scouts</Link>
          </li>
          <li>
            <Link to="/AddScouts">Add Scouts</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact Us</Link>
          </li> */}
        </ul>
        <Routes>
          <Route exact path="/form" element={<Form />}></Route>
          <Route exact path="/addscouts" element={<AddScouts />}></Route>
          {/* <Route exact path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
