import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
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
      background: 'rgba(10, 15, 26, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 212, 170, 0.1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/logo.jpg" 
            alt="FLEX Logo" 
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '8px',
              objectFit: 'cover'
            }} 
          />
          <span style={{ 
            fontWeight: '900', 
            fontSize: '1.6rem', 
            background: 'linear-gradient(to right, var(--teal), var(--cyan))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '3px' 
          }}>
            FLEX
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {['Market', 'Shop', 'Swap', 'Verify'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`}
              style={{
                color: location.pathname === `/${item.toLowerCase()}` ? 'var(--teal)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s',
                position: 'relative'
              }}
            >
              {item}
              {location.pathname === `/${item.toLowerCase()}` && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, var(--teal), var(--cyan))',
                    borderRadius: '2px'
                  }}
                />
              )}
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
                color: location.pathname === '/wishlist' ? 'var(--teal)' : 'var(--text-primary)',
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
                  background: 'linear-gradient(135deg, var(--teal), var(--cyan))',
                  color: '#0A0F1A',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
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
                color: location.pathname === '/cart' ? 'var(--teal)' : 'var(--text-primary)',
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
                  background: 'linear-gradient(135deg, var(--teal), var(--cyan))',
                  color: '#0A0F1A',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
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
            background: 'rgba(0, 212, 170, 0.1)', 
            padding: '6px 14px', 
            borderRadius: '20px',
            border: '1px solid rgba(0, 212, 170, 0.2)'
          }}>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)' }}
            />
            <span style={{ fontSize: '0.7rem', color: 'var(--teal)', fontWeight: '700', textTransform: 'uppercase' }}>Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
