import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0',
      background: 'rgba(10, 25, 47, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <Zap color="#D4AF37" size={32} />
          <span style={{ fontWeight: '900', fontSize: '1.8rem', color: '#FFF', letterSpacing: '2px' }}>
            FLEX
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Market', 'Swap', 'Verify'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`}
              style={{
                color: location.pathname === `/${item.toLowerCase()}` ? '#D4AF37' : '#CCD6F6',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s'
              }}
            >
              {item}
            </Link>
          ))}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'rgba(0, 255, 0, 0.05)', 
            padding: '6px 14px', 
            borderRadius: '20px',
            border: '1px solid rgba(0, 255, 0, 0.2)'
          }}>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FF00' }}
            />
            <span style={{ fontSize: '0.7rem', color: '#00FF00', fontWeight: '900', textTransform: 'uppercase' }}>Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
