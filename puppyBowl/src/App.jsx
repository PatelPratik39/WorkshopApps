import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar.jsx";
import AddPlayer from "./components/AddPlayer.jsx";


function App() {
  return (
    <>
      <div>
        <NavBar />
        {/* <div className="header">
          <h1>🐶 Puppy Bowl 🐶</h1>
        </div> */}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
          {/* <Route path="/addPlayer" element={<AddPlayer />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
