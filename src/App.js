// import logo from './logo.svg';
import './App.css';

// import './assets/images/main.js'
import {
  Routes, Route
} from "react-router-dom";
import React from "react";
import Home from './views/home/Home';

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
    </Routes>

  );
}

export default App;
