import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Pacotes from "./components/pages/Pacotes";
import Destinos from "./components/pages/Destinos";
import Entrar from "./components/pages/Entrar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/pacotes" exact element={<Pacotes/>} />
                <Route path="/destinos" exact element={<Destinos/>} />
                <Route path="/entrar" exact element={<Entrar/>} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
