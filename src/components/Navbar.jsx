import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Activity, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { getCartCount, wishlist } = useCart();
  const cartCount = getCartCount();
  const wishlistCount = wishlist.length;

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
          {['Market', 'Shop', 'Swap', 'Verify'].map((item) => (
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
          
          {/* Wishlist Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ position: 'relative' }}
          >
            <Link 
              to="/wishlist"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: location.pathname === '/wishlist' ? '#D4AF37' : '#CCD6F6',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              <Heart size={20} />
            </Link>
            {wishlistCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'linear-gradient(135deg, var(--gold), #B8860B)',
                  color: 'var(--navy)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}
              >
                {wishlistCount}
              </motion.div>
            )}
          </motion.div>

          {/* Cart Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ position: 'relative' }}
          >
            <Link 
              to="/cart"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: location.pathname === '/cart' ? '#D4AF37' : '#CCD6F6',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              <ShoppingCart size={20} />
            </Link>
            {cartCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'linear-gradient(135deg, var(--gold), #B8860B)',
                  color: 'var(--navy)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}
              >
                {cartCount}
              </motion.div>
            )}
          </motion.div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'rgba(0, 255, 0, 0.05)', 
            padding: '6px 14px', 
            borderRadius: '20px',
            border: '1px solid rgba(0, 255, 0, 0.2)'
          }}>
            <div
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FF00', opacity: 0.8 }}
            />
            <span style={{ fontSize: '0.7rem', color: '#00FF00', fontWeight: '900', textTransform: 'uppercase' }}>Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
