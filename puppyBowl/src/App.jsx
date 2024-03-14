// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayer from "./components/AllPlayer.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <h1> Puppy Bowl using React</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayer />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
