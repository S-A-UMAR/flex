import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Heart size={32} fill="#D4AF37" color="#D4AF37" />
            <h1 style={{ fontSize: '2.5rem' }}>
              MY <span className="gold-text">WISHLIST</span>
            </h1>
          </div>
          <p style={{ color: '#8892B0' }}>
            {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved
          </p>
        </motion.div>

        {wishlist.length === 0 ? (
          // Empty Wishlist
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center'
            }}
          >
            <Heart size={48} color="#8892B0" style={{ margin: '0 auto 1rem' }} />
            <p style={{ fontSize: '1.2rem', color: '#8892B0', marginBottom: '2rem' }}>
              Your wishlist is empty
            </p>
            <p style={{ color: '#888', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Start adding products to your wishlist to save them for later
            </p>
            <Link to="/shop" className="btn-gold">
              Browse Products
            </Link>
          </motion.div>
        ) : (
          // Wishlist Grid
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => {}}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
