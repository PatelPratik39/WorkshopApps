import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar.jsx";
import AddPlayer from "./components/AddPlayer.jsx";
import NoPage from "./components/NoPage.jsx";
import UpdatePlayer from "./components/UpdatePlayer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
          <Route path="/updatePlayer/:id" element={<UpdatePlayer />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
