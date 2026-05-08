import React from 'react';
import { Smartphone, Laptop, Gamepad2, Headphones, Fan, Tablet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Latest Phones',
    desc: 'iPhone 15, Samsung Galaxy, Google Pixel and more flagship devices.',
    icon: <Smartphone size={32} color="var(--teal)" />,
    size: 'col-span-2',
    category: 'phones'
  },
  {
    title: 'Gaming Gear',
    desc: 'Pro controllers, gaming gloves, and accessories.',
    icon: <Gamepad2 size={32} color="var(--cyan)" />,
    size: 'col-span-1',
    category: 'gamepads'
  },
  {
    title: 'Premium Audio',
    desc: 'AirPods, Sony, Bose - top earbuds and headphones.',
    icon: <Headphones size={32} color="var(--teal)" />,
    size: 'col-span-1',
    category: 'airpods'
  },
  {
    title: 'Laptops & iPads',
    desc: 'MacBooks, gaming laptops, tablets for work and play.',
    icon: <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Laptop size={24} color="var(--cyan)" />
            <Tablet size={24} color="var(--teal)" />
          </div>,
    size: 'col-span-2',
    category: 'laptops'
  }
];

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="container" style={{ padding: '5rem 0' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem', fontWeight: 900 }}
      >
        BROWSE <span className="gold-text">CATEGORIES</span>
      </motion.h2>
      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 15px 40px rgba(0, 212, 170, 0.2), 0 0 30px rgba(0, 217, 255, 0.1)' }}
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: service.size === 'col-span-2' ? 'span 2' : 'span 1',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <motion.div 
                style={{ marginBottom: '1rem' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
            <Link 
              to={`/shop?category=${service.category}`}
              style={{ 
                color: 'var(--teal)', 
                fontWeight: '700', 
                marginTop: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontSize: '0.85rem', 
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              <motion.span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                whileHover={{ gap: '0.75rem' }}
                transition={{ duration: 0.3 }}
              >
                Shop Now <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
