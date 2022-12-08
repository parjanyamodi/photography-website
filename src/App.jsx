import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
