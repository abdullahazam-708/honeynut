import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product} has been added to your cart!`);
  };

  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Golden Hive Nuts</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <div className="cart-icon">
            <span>🛒 Cart ({cart.length})</span>
          </div>
          <button className="cta-btn" onClick={scrollToProducts}>Shop Now</button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Nature's Sweetest Crunch</h1>
          <p>Experience the perfect blend of premium organic nuts infused with pure, golden honey. A healthy, delicious start to your day.</p>
          <button className="primary-btn" onClick={scrollToProducts}>Explore Our Collection</button>
        </div>
        <div className="hero-image">
          <img src="/images/NH_Main_Img.webp" alt="Honey Nuts Main" className="floating-img" />
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="section-header">
          <h2>Our Bestsellers</h2>
          <p>Discover our premium selection of honey-infused nuts, crafted for health and taste.</p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/images/Best_Nuts_Front.webp" alt="Best Nuts" />
            </div>
            <h3>Premium Mixed Nuts</h3>
            <p className="price">$19.99</p>
            <button className="add-to-cart" onClick={() => addToCart('Premium Mixed Nuts')}>Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/images/Honey_Nuts_-_Islamic_Foods.webp" alt="Islamic Foods Honey Nuts" />
            </div>
            <h3>Classic Honey Nuts</h3>
            <p className="price">$15.99</p>
            <button className="add-to-cart" onClick={() => addToCart('Classic Honey Nuts')}>Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/images/mix-nuts-honey-makes-your-morning-healthy-helps-lower-blood-pressure-contains-nutrients-100-pure-organic-221903_1000x.webp" alt="Organic Mix Nuts" />
            </div>
            <h3>Organic Morning Mix</h3>
            <p className="price">$24.99</p>
            <button className="add-to-cart" onClick={() => addToCart('Organic Morning Mix')}>Add to Cart</button>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Welcome to Golden Hive Nuts, where our passion for natural, healthy living meets exquisite taste. Started by a small family of farmers and beekeepers, our journey began with a simple mission: to provide the highest quality, hand-selected nuts naturally sweetened with 100% pure organic honey.</p>
          <p>We source our ingredients responsibly, ensuring every jar is packed with heart-healthy nutrients to jumpstart your mornings. We are a small starting business with a big dream: making healthy snacking an irresistible delight.</p>
        </div>
        <div className="about-image">
          <img src="/images/NH_Main_Img.webp" alt="Our story" className="rounded-img" />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Have questions about our products or want to place a bulk order? We'd love to hear from you!</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Location</h3>
              <p>123 Honeybee Lane, Sweet City, SC 12345</p>
            </div>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>hello@goldenhivenuts.com</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We will reply soon."); }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Golden Hive Nuts</h3>
            <p>Bringing nature's finest ingredients to your table.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Shop</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <p>Follow us on social media for updates and sweet deals!</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Golden Hive Nuts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
