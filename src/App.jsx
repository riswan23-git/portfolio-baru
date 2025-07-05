import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <main className="bg-gray-900 text-white min-h-screen font-sans">
        <nav className="bg-gray-800 px-6 py-4 shadow-md flex justify-between items-center">
          <h1 className="text-lg font-bold"><h1>Riswan Fachrezy - Portofolio</h1>
</h1>
          <ul className="flex gap-6 text-sm">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
