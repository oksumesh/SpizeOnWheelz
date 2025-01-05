import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NorthIndianMenu from './pages/NorthIndianMenu';
import SouthIndianMenu from './pages/SouthIndianMenu';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 relative">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu/north" element={<NorthIndianMenu />} />
            <Route path="/menu/south" element={<SouthIndianMenu />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;