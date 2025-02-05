import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmpresaDetalhes from "./pages/EmpresaDetalhes";
import Header from "./components/Header";
import Login from "./pages/Login"; 

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header /> {/* Adiciona o Header aqui */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa/:id" element={<EmpresaDetalhes />} />
          <Route path="/login" element={<Login />} /> {/* Nova rota de login */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;