import React, { useState } from 'react';
import { ShoppingCart, Gem, Star, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';
import FloatingCP from '../components/FloatingCP';

const cpItems = [
  { id: 101, name: '80 CP', price: '₦1,200', discount: 'Instant', hot: false },
  { id: 102, name: '420 CP', price: '₦4,500', discount: '-5%', hot: false },
  { id: 103, name: '880 CP', price: '₦8,500', discount: '-10%', hot: true },
  { id: 104, name: '2400 CP', price: '₦18,000', discount: 'Popular', hot: true },
  { id: 105, name: '5000 CP', price: '₦35,000', discount: '-15%', hot: true },
  { id: 106, name: '10800 CP', price: '₦65,000', discount: 'Best Value', hot: true },
];

const items = [
  // TECH
  { id: 1, name: 'iPhone 15 Pro Max', category: 'Tech', condition: 'New', price: '₦1,250,000', img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop', badge: 'Popular' },
  { id: 2, name: 'MacBook Pro M3 Max', category: 'Tech', condition: 'Elite Spec', price: '₦3,850,000', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop', badge: 'Elite' },
  
  // GAMING ACCOUNTS
  { id: 3, name: 'CODM Mythic Account', category: 'Gaming', condition: 'Ghost Riley + 5 Mythics', price: '₦185,000', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop', badge: 'Hot' },
  { id: 4, name: 'YouTube Monetized (10k)', category: 'Socials', condition: 'Active / USA', price: '₦125,000', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop', badge: 'Featured' },
  
  // SOCIALS (Only TikTok, Facebook, Instagram)
  { id: 5, name: 'Instagram Verified', category: 'Socials', condition: '50k Followers', price: '₦450,000', img: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'Aged TikTok (10k)', category: 'Socials', condition: 'US Organic', price: '₦35,000', img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, name: 'Facebook Business Page', category: 'Socials', condition: 'Ads Approved', price: '₦45,000', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop' },
];

const Market = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <div 
      className="container"
      style={{ paddingTop: '100px', paddingBottom: '100px' }}
    >
      <FloatingCP />
      
      {/* Mobile-First Header */}
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <TrendingUp size={16} className="gold-text" />
          <span style={{ fontSize: '0.7rem', fontWeight: '900', color: '#8892B0' }}>ELITE TRADING PLATFORM</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>FLEX <span className="gold-text">MARKET</span></h1>
        
        {/* CP FLASH SECTION */}
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '3rem', border: '1px solid var(--gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Zap size={20} color="#D4AF37" fill="#D4AF37" />
            <h2 style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>CODM CP <span className="gold-text">INSTANT LOAD</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {cpItems.map(cp => (
              <div
                key={cp.id}
                onClick={() => window.open(generateWhatsAppLink(WHATSAPP_MSGS.CURRENCY('CODM CP', cp.name)), '_blank')}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                {cp.hot && <Star size={12} style={{ position: 'absolute', top: 8, right: 8, color: 'var(--gold)' }} />}
                <Gem size={24} color="#D4AF37" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{cp.name}</div>
                <div className="gold-text" style={{ fontSize: '0.9rem', fontWeight: '900' }}>{cp.price}</div>
                <div style={{ fontSize: '0.6rem', color: '#8892B0', marginTop: '0.3rem' }}>{cp.discount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Scroll */}
        <div style={{ 
          display: 'flex', 
          gap: '0.8rem', 
          overflowX: 'auto', 
          paddingBottom: '1rem',
          scrollbarWidth: 'none'
        }}>
          {['All', 'Tech', 'Gaming', 'Socials'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                background: filter === cat ? 'var(--gold)' : 'rgba(255,255,255,0.05)',
                color: filter === cat ? 'var(--navy)' : '#FFF',
                border: 'none',
                whiteSpace: 'nowrap',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              <div style={{ height: '200px', position: 'relative' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 15, right: 15 }}>
                   <div style={{ background: 'var(--navy)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid var(--gold)' }}>
                      {item.category.toUpperCase()}
                   </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.name}</h3>
                    <p style={{ color: '#8892B0', fontSize: '0.8rem' }}>{item.condition}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="gold-text" style={{ fontSize: '1.3rem', fontWeight: '900' }}>{item.price}</div>
                  </div>
                </div>
                <a
                  href={generateWhatsAppLink(WHATSAPP_MSGS.BUY(item.name, item.condition))}
                  target="_blank"
                  className="btn-gold"
                  style={{ width: '100%' }}
                >
                  <ShoppingCart size={18} /> Purchase via WhatsApp
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Market;
