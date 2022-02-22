import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Create from "./pages/create/create";
import Event from "./pages/event/event";

function App() {
  return (
      <div className="App">
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />}/>
               <Route path="/create" element={<Create />}/>  
              <Route path="/event" element={<Event />}/>
              <Route path="*" element={<Home />}/>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
