import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#material' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.8;
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
      
      // Update active link based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '#beranda';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = '#' + section;
        }
      }
      setActive(current);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__inner">
        
        {/* Shiny Blue Sphere Logo */}
        <a href="#beranda" className="navbar__brand" onClick={(e) => handleNav(e, '#beranda')}>
          <div className="navbar__sphere"></div>
          <span className="navbar__brand-text">BGN</span>
        </a>

        {/* Mobile Toggle */}
        <button 
          className="navbar__mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Text Links with Neumorphic Active State */}
        <nav className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} 
               className={`navbar__link ${active === link.href ? 'navbar__link--active' : ''}`}
               onClick={(e) => handleNav(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
