import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const cartSummary = cart
      .map(item => `${item.name} (x${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');
    
    const total = getCartTotal();
    const msg = `I would like to purchase the following items:\n\n${cartSummary}\n\nTotal: ₦${total.toLocaleString()}`;
    
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', textDecoration: 'none', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '700' }}>
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            SHOPPING <span className="gold-text">CART</span>
          </h1>
        </motion.div>

        {cart.length === 0 ? (
          // Empty Cart
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center'
            }}
          >
            <p style={{ fontSize: '1.2rem', color: '#8892B0', marginBottom: '2rem' }}>
              Your cart is empty
            </p>
            <Link to="/shop" className="btn-gold">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Cart Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr 150px',
                    gap: '1.5rem',
                    alignItems: 'center',
                    '@media (max-width: 640px)': {
                      gridTemplateColumns: '80px 1fr',
                    }
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      aspectRatio: '1/1'
                    }}
                  />

                  {/* Details */}
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ color: '#8892B0', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                      ₦{item.price.toLocaleString()} each
                    </p>
                    <p style={{ color: '#D4AF37', fontSize: '0.95rem', fontWeight: '700' }}>
                      ₦{(item.price * item.quantity).toLocaleString()} total
                    </p>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    alignItems: 'flex-end'
                  }}>
                    {/* Quantity Controls */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '6px',
                        padding: '0.5rem'
                      }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#D4AF37',
                          cursor: 'pointer',
                          padding: '0.25rem',
                          display: 'flex'
                        }}
                      >
                        <Minus size={16} />
                      </motion.button>
                      <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: '700' }}>
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#D4AF37',
                          cursor: 'pointer',
                          padding: '0.25rem',
                          display: 'flex'
                        }}
                      >
                        <Plus size={16} />
                      </motion.button>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'rgba(244, 67, 54, 0.2)',
                        border: '1px solid rgba(244, 67, 54, 0.4)',
                        color: '#F44336',
                        borderRadius: '6px',
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Trash2 size={14} />
                      Remove
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Cart Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card"
              style={{
                padding: '2rem',
                position: 'sticky',
                bottom: '20px'
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#8892B0' }}>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span style={{ fontWeight: '700' }}>₦{getCartTotal().toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#8892B0' }}>Estimated Delivery</span>
                  <span style={{ fontWeight: '700', color: '#D4AF37' }}>Same Day</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleCheckout}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: 'linear-gradient(135deg, var(--gold), #B8860B)',
                    color: 'var(--navy)',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textTransform: 'uppercase'
                  }}
                >
                  Checkout via WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={clearCart}
                  style={{
                    padding: '1rem 1.5rem',
                    background: 'transparent',
                    color: '#D4AF37',
                    border: '1px solid var(--gold)',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Clear Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
