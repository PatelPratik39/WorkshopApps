// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayer from "./components/AllPlayer.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
// import NavBar from "./components/NavBar.jsx";
import "./App.css"


function App() {
  return (
    <>
      <div className="header">
        <h1> Puppy Bowl</h1>
      </div>
      <AllPlayer/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayer />} />
          <Route path="/players/:id" element={<SinglePlayer />} /> 
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
