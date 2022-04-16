import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Error/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
