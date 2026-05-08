import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Market from './pages/Market';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Swap from './pages/Swap';
import Verify from './pages/Verify';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/market" element={<Market />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        
        <footer style={{ padding: '6rem 0 4rem', textAlign: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.1)', marginTop: '4rem', background: 'rgba(255,255,255,0.02)' }}>
          <div className="container">
            <h2 style={{ color: '#FFF', fontWeight: '900', letterSpacing: '4px', marginBottom: '1rem' }}>FLEX</h2>
            <p style={{ color: '#8892B0', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Premium Digital & Tech Ecosystem. Trade with Confidence.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
              <a href="/market" style={{ color: '#CCD6F6', textDecoration: 'none', fontSize: '0.8rem' }}>Marketplace</a>
              <a href="/swap" style={{ color: '#CCD6F6', textDecoration: 'none', fontSize: '0.8rem' }}>Trade Portal</a>
              <a href="/verify" style={{ color: '#CCD6F6', textDecoration: 'none', fontSize: '0.8rem' }}>Verification</a>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>WHATSAPP: +2347072692701</span>
            </div>
            <p style={{ color: '#444', fontSize: '0.7rem', marginTop: '1rem' }}>
              &copy; 2024 FLEX ONLINE SERVICES.
            </p>
          </div>
        </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
