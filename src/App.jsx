import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import MapPage from './pages/map/MapPage'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      {/* Agrega otras rutas aquí a medida que las desarrolles */}
    </Routes>
  );
}

export default App;
