import React, { useState, useEffect } from 'react';
import {
  Coffee,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Menu as MenuIcon,
  X,
  Pizza,
  Utensils,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import heroBg from './assets/hero-bg.png';
import menuImg from './assets/menu-highlights.png';

const MENU_DATA = {
  pizzas: {
    title: "Pizzas",
    categories: [
      {
        name: "Veg Pizzas",
        items: [
          { name: "Margherita Premium Pizza", price: "180" },
          { name: "Veg Corn Premium Pizza", price: "210" },
          { name: "Peri Peri Premium Pizza", price: "200" },
          { name: "Mushroom Premium Pizza", price: "230" },
          { name: "Paneer Premium Pizza", price: "210" },
          { name: "Baby Corn Premium Pizza", price: "230" },
          { name: "New Touch Special Pizza (Veg)", price: "270" }
        ]
      },
      {
        name: "Non-Veg Pizzas",
        items: [
          { name: "Chicken Pizza", price: "220" },
          { name: "Chicken Tikka Pizza", price: "250" },
          { name: "Chicken Peri Peri Pizza", price: "260" },
          { name: "New Touch Special Pizza (Chicken)", price: "320" }
        ]
      }
    ]
  },
  burgers_frankies: {
    title: "Burgers & Frankies",
    categories: [
      {
        name: "Burgers",
        items: [
          { name: "Veg Burger", price: "70" },
          { name: "Veg Cheese Burger", price: "90" },
          { name: "Chicken Burger", price: "110" },
          { name: "Chicken Crispy Burger", price: "140" },
          { name: "Jumbo Chicken Burger", price: "180" }
        ]
      },
      {
        name: "Frankies (Rolls)",
        items: [
          { name: "Veg Frankie", price: "45" },
          { name: "Veg Cheese Frankie", price: "75" },
          { name: "Veg Masala Frankie", price: "60" },
          { name: "Veg Paneer Cheese Frankie", price: "100" },
          { name: "Veg Aloo Tikka Roll", price: "70" }
        ]
      },
      {
        name: "Fries & Sides",
        items: [
          { name: "French Fries", price: "80" },
          { name: "Peri Peri Fries", price: "100" },
          { name: "Chicken Nuggets (6 pcs)", price: "140" },
          { name: "Veg Nuggets (10 pcs)", price: "90" }
        ]
      }
    ]
  },
  sandwiches: {
    title: "Sandwiches",
    categories: [
      {
        name: "Veg Sandwiches",
        items: [
          { name: "Veg Sandwich (Plain)", price: "45" },
          { name: "Veg Cheese Sandwich", price: "75" },
          { name: "Veg Masala Sandwich", price: "50" },
          { name: "Veg Masala Cheese Sandwich", price: "80" },
          { name: "Veg Paneer Sandwich", price: "80" },
          { name: "Veg Paneer Cheese Sandwich", price: "110" },
          { name: "Veg Brunt Garlic Sandwich", price: "70" },
          { name: "New Touch Special Sandwich (Veg)", price: "150" },
          { name: "Sweet Choco Sandwich with Ice Cream", price: "100" }
        ]
      },
      {
        name: "Non-Veg Sandwiches",
        items: [
          { name: "Chicken Sandwich", price: "80" },
          { name: "Chicken Cheese Sandwich", price: "110" },
          { name: "Chicken Garlic Sandwich", price: "100" },
          { name: "Chicken Tikka Sandwich", price: "115" },
          { name: "Chicken Tikka Cheese Sandwich", price: "155" },
          { name: "Egg Cheese Sandwich", price: "100" }
        ]
      }
    ]
  },
  pasta_beverages: {
    title: "Pasta & Beverages",
    categories: [
      {
        name: "Pasta",
        items: [
          { name: "Red Sauce Pasta (Veg)", price: "140" },
          { name: "White Sauce Pasta (Veg)", price: "160" },
          { name: "Chicken Pasta", price: "190" }
        ]
      },
      {
        name: "Cold Coffee & Shakes",
        items: [
          { name: "Cold Coffee", price: "60" },
          { name: "Cold Coffee with Vanilla", price: "80" },
          { name: "Cold Coffee with Chocolate", price: "90" },
          { name: "Oreo Shake", price: "100" },
          { name: "Kitkat Shake", price: "110" }
        ]
      },
      {
        name: "Hot Beverages",
        items: [
          { name: "Hot Coffee", price: "40" },
          { name: "Special Tea", price: "30" },
          { name: "Hot Chocolate", price: "60" }
        ]
      }
    ]
  }
};

const MenuModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('pizzas');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="menu-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="menu-modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
          >
            <button className="close-menu" onClick={onClose}><X size={32} /></button>

            <div className="menu-modal-header">
              <h2 className="brand"><span className="brand-new">Our</span> <span className="brand-touch">Menu</span></h2>
              <p>Freshly prepared daily with the best ingredients</p>
            </div>

            <div className="menu-tabs">
              {Object.entries(MENU_DATA).map(([key, value]) => (
                <button
                  key={key}
                  className={`menu-tab-btn ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  {value.title}
                </button>
              ))}
            </div>

            <div className="menu-items-grid">
              {MENU_DATA[activeTab].categories.map((cat, idx) => (
                <div key={idx} className="menu-category">
                  <h3 className="category-title">{cat.name}</h3>
                  <div className="item-list">
                    {cat.items.map((item, i) => (
                      <div key={i} className="menu-item">
                        <span className="item-name">{item.name}</span>
                        <div className="item-dots"></div>
                        <span className="item-price">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-footer">
              <p>* We use only Halal Chicken</p>
              <button className="btn-primary" onClick={() => window.location.href = 'tel:+918308955699'}>
                Call to Order Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/918308955699?text=Hi%20Cafe%20New%20Touch!%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20place%20an%20order."
    target="_blank"
    className="wa-float"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="wa-icon"><Phone size={24} /></div>
    <span className="wa-text">Order on WhatsApp</span>
  </motion.a>
);

const VibeSelector = () => {
  const [activeVibe, setActiveVibe] = useState('chill');

  const vibes = {
    chill: { label: '☕ Just Chilling', suggest: 'Hot Coffee & Veg Cheese Sandwich', icon: <Coffee /> },
    hungry: { label: '🍔 Super Hungry', suggest: 'New Touch Special Pizza', icon: <Utensils /> },
    work: { label: '💻 Work Mode', suggest: 'Cold Coffee & Chicken Sandwich', icon: <Star /> },
    friends: { label: '🍕 With Friends', suggest: 'Peri Peri Pizza & Fries Platter', icon: <Pizza /> }
  };

  return (
    <div className="vibe-selector-container glass-card" >
      <div className="vibe-header">
        <h3>How's the Vibe Today?</h3>
        <p>Pick a mood, we'll suggest the food.</p>
      </div>
      <div className="vibe-options">
        {Object.entries(vibes).map(([key, value]) => (
          <button
            key={key}
            className={`vibe-btn ${activeVibe === key ? 'active' : ''}`}
            onClick={() => setActiveVibe(key)}
          >
            {value.label.split(' ')[0]}
          </button>
        ))}
      </div>
      <motion.div
        key={activeVibe}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="vibe-suggestion"
      >
        <span className="suggestion-label">We Recommend:</span>
        <h4 className="suggestion-text">{vibes[activeVibe].suggest}</h4>
      </motion.div>
    </div >
  );
};

const QRMockup = () => {
  // Generate QR code URL - links to open full menu
  const menuUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}?menu=open`
    : '?menu=open';
  
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(menuUrl)}`;
  
  return (
    <div className="qr-mockup">
      <div className="qr-box">
        <img 
          src={qrCodeUrl} 
          alt="Menu QR Code" 
          className="qr-code-image"
        />
      </div>
      <div className="qr-text">
        <span>Scan to View</span>
        <strong>Menu</strong>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for menu parameter in URL and open menu modal
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('menu') === 'open') {
      setIsFullMenuOpen(true);
      // Clean up URL without reloading
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="brand">
            <span className="brand-cafe">Cafe</span>
            <span className="brand-new-touch">New Touch</span>
          </div>

          <div className="nav-links-desktop">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}
          </div>

          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu"
            >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <img src={heroBg} alt="Cafe Interior" className="hero-img" />
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="hero-subtitle">Welcome to Cafe New Touch</h5>
            <h1 className="hero-title">Where Great Food <br />Meets Great Vibes.</h1>
            <p className="hero-description">The perfect cozy spot in Ratnagiri for Cravings, Convos, and Community.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setIsFullMenuOpen(true)}>
                View Full Menu
              </button>
              <button className="btn-secondary" onClick={() => window.location.href = 'tel:+918308955699'}>
                Call to Order
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-grid">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="about-image-wrapper">
              <img src={heroBg} alt="Vibe" className="about-img" />
              <div className="about-badge">
                <span className="badge-number">Fresh</span>
                <span className="badge-text">Daily Made with Love</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Experience the "New Touch"</h2>
            <p className="about-description">
              Located in the heart of Ratnagiri, Cafe New Touch offers a cozy and relaxed ambiance
              perfect for hanging out with friends or enjoying a quiet cup of tea. With our minimalistic
              decor and welcoming atmosphere, we serve delicious food made fresh daily with quality ingredients.
            </p>
            <p className="about-description">
              Whether you are here for a quick snack or a relaxed evening, our friendly staff is ready to serve you.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon"><Coffee /></div>
                <span>Premium Brews</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Clock /></div>
                <span>Quick Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vibe Selector */}
      <section className="vibe-section">
        <div className="container">
          <VibeSelector />
        </div>
      </section>

      {/* Highlights / Menu Preview */}
      <section id="menu" className="highlights">
        <div className="container">
          <h2 className="section-title">Our Favorites</h2>
          <p className="section-subtitle-center">From quick bites to filling meals, we serve it all with love.</p>

          <div className="menu-grid">
            <HighlightCard
              icon={<Pizza />}
              title="Pizzas"
              desc="Freshly made and loaded with premium toppings - both veg and non-veg options."
              image={menuImg}
            />
            <HighlightCard
              icon={<Utensils />}
              title="Burgers & Frankies"
              desc="Delicious burgers, rolls, and crispy sides to satisfy your cravings."
              image={menuImg}
            />
            <HighlightCard
              icon={<Star />}
              title="Sandwiches"
              desc="Grilled to perfection with house-made sauces - veg and non-veg varieties."
              image={menuImg}
            />
            <HighlightCard
              icon={<Coffee />}
              title="Pasta & Beverages"
              desc="Fresh pasta dishes and refreshing beverages - hot coffee, cold shakes, and more."
              image={menuImg}
            />
          </div>

          <div className="menu-cta">
            <button className="btn-primary" onClick={() => setIsFullMenuOpen(true)}>
              Explore Full Menu <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-grid">
            <Testimonial
              text="The cafe has a cozy and relaxed ambiance... The staff is friendly and courteous, and the service is quick and efficient."
              author="Sukumar Bhatawadekar"
              role="Local Guide"
            />
            <Testimonial
              text="Wonderful place to enjoy snacks. Awesome coffee, awesome pizzas, burgers... Never expected such a lovely cafe in Ratnagiri."
              author="Vikrant Sawant"
              role="Regular Customer"
            />
            <Testimonial
              text="I love your food! It was very tasty and yummy.. the atmosphere was cool."
              author="Arpita Nalkar"
              role="Foodie"
            />
          </div>
        </div>
      </section>

      {/* Map & Visit Section */}
      <section id="contact" className="visit">
        <div className="container visit-grid">
          <div className="visit-info glass-card">
            <h2 className="visit-title">Visit Us</h2>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>Shop no.16, Nawathe Paradise, Parasnagar, Kamani Karwanchiwadi, Ratnagiri, MH 415639.</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 83089 55699</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>Mon - Sat: 11:00 AM – 2:00 PM, 5:00 PM – 10:00 PM</p>
                <p>Sunday: 5:00 PM – 10:00 PM</p>
              </div>
            </div>

            <QRMockup />

            <button className="btn-primary w-full" style={{ width: '100%', marginTop: '20px' }} onClick={() => window.location.href = 'tel:+918308955699'}>
              Call Now to Order
            </button>
          </div>

          <div className="visit-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.5298536128854!2d73.30870907516244!3d16.9954378838318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9690026e6d339%3A0x6d36e2f1c50d3a5a!2sCafe%20New%20Touch!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '24px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3 className="brand">Cafe New Touch</h3>
            <p>Fresh food, warm vibes, every day.</p>
          </div>

          <div className="footer-social">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
          </div>

          <div className="footer-copyright">
            <p>&copy; 2025 Cafe New Touch. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
      <MenuModal isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
    </div>
  );
};

const HighlightCard = ({ icon, title, desc, image }) => (
  <motion.div
    className="menu-card"
    whileHover={{ y: -10 }}
  >
    <div className="menu-card-img-wrapper">
      <img src={image} alt={title} className="menu-card-img" />
      <div className="menu-card-icon">{icon}</div>
    </div>
    <div className="menu-card-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </motion.div>
);

const Testimonial = ({ text, author, role }) => (
  <div className="testimonial-card glass-card">
    <div className="testimonial-quote"><Quote size={32} /></div>
    <p className="testimonial-text">"{text}"</p>
    <div className="testimonial-meta">
      <strong>{author}</strong>
      <span>{role}</span>
      <div className="stars">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
    </div>
  </div>
);

export default App;
