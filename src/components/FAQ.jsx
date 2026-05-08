import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'How do I order on FLEX?',
    answer: 'Simply browse our Shop, add products to your cart, and click "Checkout via WhatsApp". We will confirm your order and process delivery immediately.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, mobile payment apps, and cash on delivery in select locations. Payment confirmation is instant.'
  },
  {
    question: 'How fast is delivery?',
    answer: 'We offer same-day or next-day delivery depending on your location. Most orders within major cities are delivered within 24 hours.'
  },
  {
    question: 'Are all products authentic?',
    answer: 'Yes! We only sell 100% authentic products. All items come with original packaging and warranty where applicable.'
  },
  {
    question: 'Can I return or exchange items?',
    answer: 'Yes! We have a 7-day return policy on all items. Simply contact us via WhatsApp with your order number and reason for return.'
  },
  {
    question: 'Do you offer warranty on products?',
    answer: 'Most electronics come with manufacturer warranty. We also provide our own 30-day quality guarantee on all products.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
      transition: { duration: 0.4 },
    },
  };

  return (
    <section style={{ padding: '5rem 0' }} className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', fontWeight: 900 }}>
          FREQUENTLY <span className="gold-text">ASKED QUESTIONS</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          Everything you need to know about shopping with FLEX
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card"
            style={{ marginBottom: '1rem', overflow: 'hidden' }}
          >
            <motion.button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              whileHover={{ x: 5 }}
              style={{
                width: '100%',
                padding: '1.5rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.05rem',
                fontWeight: '700'
              }}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} color="var(--teal)" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderTop: '1px solid rgba(0, 212, 170, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <p style={{
                    padding: '0 1.5rem 1.5rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '0.95rem'
                  }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2.5rem',
          background: 'rgba(0, 212, 170, 0.08)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 212, 170, 0.2)'
        }}
      >
        <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
          Still have questions?
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Contact our support team 24/7 on WhatsApp
        </p>
        <a href="https://wa.me/2347072692701" target="_blank" rel="noreferrer" className="btn-gold">
          Message on WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default FAQ;
