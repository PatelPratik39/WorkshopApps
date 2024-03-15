import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar.jsx";
import AddPlayer from "./components/AddPlayer.jsx";
import RemovePlayer from "./components/RemovePlayer";
import NoPage from "./components/NoPage.jsx";


function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
          <Route path="/removePlayer/:id" element={<RemovePlayer />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
