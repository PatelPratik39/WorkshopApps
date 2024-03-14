import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AllPlayer from './components/AllPlayer.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayer />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
