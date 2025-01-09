import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import RiverstoneMenu from './pages/RiverstoneMenu';
import SchofieldsMenu from './pages/SchofieldsMenu';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 relative">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu/riverstone" element={<RiverstoneMenu />} />
              <Route path="/menu/schofields" element={<SchofieldsMenu />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;