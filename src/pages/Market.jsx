import React, { useState } from 'react';
import { ShoppingCart, Flame, Star, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';
import { products, categories } from '../data/products';
import FloatingCP from '../components/FloatingCP';

const Market = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <FloatingCP />
      
      <div className="container">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Flame size={18} style={{ color: 'var(--pink)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '900', color: '#A8C5D1', letterSpacing: '2px' }}>
              PREMIUM MARKETPLACE
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            lineHeight: 1.1,
            marginBottom: '1rem',
            fontWeight: 900
          }}>
            FLEX <span className="gold-text">MARKET</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#A8C5D1',
            maxWidth: '600px',
            marginBottom: '2.5rem'
          }}>
            Instant CP bundles, verified gaming accounts, and premium social media assets. All transactions secured via WhatsApp.
          </p>

          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <Search size={18} style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--cyan)',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3.5rem',
                background: 'rgba(0, 217, 255, 0.08)',
                border: '1px solid var(--cyan)',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontFamily: 'var(--font-main)',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(0, 217, 255, 0.12)';
                e.target.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(0, 217, 255, 0.08)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollbarWidth: 'none'
          }}>
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.7rem 1.8rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: selectedCategory === cat.id
                    ? 'linear-gradient(135deg, var(--pink), #FF1493)'
                    : 'rgba(0, 217, 255, 0.1)',
                  color: selectedCategory === cat.id ? '#fff' : 'var(--text-primary)',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s',
                  boxShadow: selectedCategory === cat.id ? '0 0 25px var(--pink-glow)' : 'none'
                }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'linear-gradient(135deg, var(--pink), #FF1493)',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 0 15px var(--pink-glow)'
                }}>
                  {product.category}
                </div>

                {/* Hot Badge */}
                {product.inStock && (
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      background: 'rgba(13, 27, 42, 0.9)',
                      color: 'var(--pink)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      border: '1px solid var(--pink)'
                    }}
                  >
                    <Flame size={12} />
                    HOT
                  </motion.div>
                )}
              </div>

              {/* Product Info */}
              <div style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    color: '#A8C5D1',
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        style={{
                          color: i < Math.floor(product.rating) ? 'var(--cyan)' : 'rgba(0, 217, 255, 0.3)',
                          fill: i < Math.floor(product.rating) ? 'var(--cyan)' : 'none'
                        }}
                      />
                    ))}
                    <span style={{ fontSize: '0.75rem', color: '#A8C5D1' }}>
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Price and Button */}
                <div>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--pink), #FF1493)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '0.2rem'
                    }}>
                      Price
                    </div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: '#fff'
                    }}>
                      ₦{product.price.toLocaleString()}
                    </div>
                  </div>

                  <motion.a
                    href={generateWhatsAppLink(WHATSAPP_MSGS.BUY(product.name, product.description))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    <ShoppingCart size={16} />
                    Buy on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: '4rem 2rem'
            }}
          >
            <Filter size={48} style={{ color: 'var(--cyan)', marginBottom: '1rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>No products found</h3>
            <p style={{ color: '#A8C5D1' }}>Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Market;
