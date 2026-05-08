import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart, addToWishlist, isInWishlist } = useCart();
  const [showNotification, setShowNotification] = useState('');
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setShowNotification('Added to cart!');
    setTimeout(() => setShowNotification(''), 2000);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    addToWishlist(product);
    setShowNotification(inWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
    setTimeout(() => setShowNotification(''), 2000);
  };

  const handleWhatsAppPurchase = (e) => {
    e.stopPropagation();
    const msg = WHATSAPP_MSGS.BUY(product.name, `₦${product.price.toLocaleString()}`);
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const renderRating = () => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < fullStars ? '⭐' : hasHalfStar && i === fullStars ? '⭐' : '☆'}
          </span>
        ))}
        <span style={{ fontSize: '0.75rem', color: '#8892B0', marginLeft: '4px' }}>
          {product.rating} ({product.reviews})
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      onClick={onViewDetails}
      className="glass-card product-card"
      style={{
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <motion.img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Stock Status Badge */}
        <div
          className={`stock-indicator ${product.inStock ? 'in-stock' : 'out-of-stock'}`}
          style={{ position: 'absolute', bottom: 12, left: 12 }}
        >
          <Package size={14} />
          <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
        </div>

        {/* Wishlist Button */}
        <motion.button
          onClick={handleWishlist}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'rgba(10, 25, 47, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '8px',
            padding: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Heart
            size={18}
            fill={inWishlist ? '#D4AF37' : 'none'}
            color={inWishlist ? '#D4AF37' : '#CCD6F6'}
          />
        </motion.button>
      </div>

      {/* Content Container */}
      <div style={{ padding: '1.5rem' }}>
        {/* Product Name & Category */}
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', lineHeight: 1.3 }}>
            {product.name}
          </h3>
          <p style={{ fontSize: '0.75rem', color: '#8892B0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {product.category}
          </p>
        </div>

        {/* Rating */}
        <div style={{ marginBottom: '1rem' }}>
          {renderRating()}
        </div>

        {/* Price */}
        <div className="price-badge" style={{ marginBottom: '1rem', textAlign: 'center', width: '100%' }}>
          ₦{product.price.toLocaleString()}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <motion.button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              flex: 1,
              padding: '0.75rem',
              background: product.inStock ? 'rgba(212, 175, 55, 0.2)' : 'rgba(100, 100, 100, 0.2)',
              border: `1px solid ${product.inStock ? 'var(--gold)' : '#555'}`,
              borderRadius: '8px',
              color: product.inStock ? 'var(--gold)' : '#888',
              fontWeight: '700',
              cursor: product.inStock ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              opacity: product.inStock ? 1 : 0.6
            }}
          >
            <ShoppingCart size={16} />
            <span>Cart</span>
          </motion.button>

          <motion.button
            onClick={handleWhatsAppPurchase}
            disabled={!product.inStock}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              flex: 1,
              padding: '0.75rem',
              background: product.inStock ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' : 'linear-gradient(135deg, #666 0%, #444 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--navy)',
              fontWeight: '700',
              cursor: product.inStock ? 'pointer' : 'not-allowed',
              fontSize: '0.85rem',
              opacity: product.inStock ? 1 : 0.6
            }}
          >
            <span>WhatsApp</span>
          </motion.button>
        </div>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--glass-bg)',
            border: '1px solid var(--gold)',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--gold)',
            zIndex: 10
          }}
        >
          {showNotification}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductCard;
