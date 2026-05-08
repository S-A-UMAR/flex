import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ExternalLink, Flame, Trophy, Gem, Hash } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const items = [
  // TECH
  { id: 1, name: 'iPhone 15 Pro Max', category: 'Tech', condition: 'New', price: '₦1,250,000', img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop', badge: 'Popular' },
  { id: 2, name: 'MacBook Pro M3 Max', category: 'Tech', condition: 'Factory Sealed', price: '₦3,850,000', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop', badge: 'Elite' },
  
  // GAMING ACCOUNTS
  { id: 3, name: 'CODM Mythic Account', category: 'Gaming', condition: 'Ghost Riley + 5 Mythics', price: '₦185,000', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop', badge: 'Hot' },
  { id: 4, name: 'Call of Duty: Legendary Acc', category: 'Gaming', condition: 'Level 200 / Maxed', price: '₦75,000', img: 'https://images.unsplash.com/photo-1552824236-07764bdc2d29?q=80&w=1000&auto=format&fit=crop' },
  
  // CURRENCY
  { id: 5, name: 'CODM 10,000 CP Bundle', category: 'Currency', condition: 'Instant Load', price: '₦42,000', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop', icon: <Gem size={24} /> },
  
  // SOCIALS
  { id: 6, name: 'Verified Instagram (Blue Tick)', category: 'Socials', condition: '50k+ Followers', price: '₦450,000', img: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1000&auto=format&fit=crop', badge: 'Premium' },
  { id: 7, name: 'Monetized YouTube Channel', category: 'Socials', condition: '10k Subs / Active', price: '₦120,000', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, name: 'Aged TikTok Account', category: 'Socials', condition: 'US/UK Region', price: '₦25,000', img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop' },
];

const Market = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
      style={{ paddingTop: '120px', paddingBottom: '100px' }}
    >
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem' }}>ELITE <span className="gold-text">MARKET</span></h1>
        <p style={{ color: '#8892B0' }}>Premium digital inventory curated for the elite.</p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}>
          {['All', 'Tech', 'Gaming', 'Currency', 'Socials'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 2rem',
                borderRadius: '4px',
                background: filter === cat ? 'var(--gold)' : 'rgba(255,255,255,0.05)',
                color: filter === cat ? 'var(--navy)' : '#FFF',
                border: filter === cat ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2.5rem' 
      }}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card"
              style={{ overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', height: '240px' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {item.badge && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '15px', 
                    left: '15px', 
                    background: 'var(--gold)', 
                    color: 'var(--navy)', 
                    padding: '2px 10px', 
                    fontSize: '0.7rem', 
                    fontWeight: '900',
                    borderRadius: '4px'
                  }}>
                    {item.badge.toUpperCase()}
                  </div>
                )}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '0', 
                  width: '100%', 
                  padding: '2rem 1.5rem 1rem',
                  background: 'linear-gradient(transparent, var(--navy))'
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.category.toUpperCase()}</span>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{item.name}</h3>
                </div>
                <p style={{ color: '#8892B0', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '3rem' }}>{item.condition}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '900' }}>{item.price}</span>
                  <a
                    href={generateWhatsAppLink(WHATSAPP_MSGS.BUY(item.name, item.condition))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                    style={{ 
                      padding: '0.6rem 1.2rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    <ShoppingCart size={18} /> Buy
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Market;
