import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Canvas from './componnents/Canvas'
import Galerie from './componnents/Galerie' // Exemple d’un autre composant
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.body.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.body.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/galerie/:scenario" element={<Galerie />} />
        <Route path="/" element={<Canvas />} />
      </Routes>
    </Router>
  )
}

export default App
