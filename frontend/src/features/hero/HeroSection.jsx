import heroImg from '../../assets/hero-house.png';
import { FlowButton } from '../../shared/components/FlowButton';
import './HeroSection.css';

const NAV_LINKS = ['Layanan', 'Portfolio', 'Material', 'FAQ'];

const STATS = [
  { img: heroImg, value: '150+', label: 'Proyek selesai sejak 2014' },
  { img: heroImg, value: '10+',  label: 'Tahun garansi struktur' },
  { img: heroImg, value: '500+', label: 'Klien puas di Indonesia' },
];

import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="beranda">

      {/* ═══════════════ LEFT PANEL ═══════════════ */}
      <motion.div 
        className="hero__left"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >

        {/* Mini Navbar — kiri */}
        <motion.div className="hero__left-nav" variants={fadeUpVariant}>
          <div className="hero__logo">
            <span className="hero__logo-icon">BGN</span>
            <span className="hero__logo-text">
              Bangun Griya<br /><strong>Nuswantara</strong>
            </span>
          </div>
          <nav className="hero__nav-links">
            {NAV_LINKS.map((l) => (
              <button key={l} className="hero__nav-link"
                onClick={() => scrollTo(`#${l.toLowerCase()}`)}>
                {l}
              </button>
            ))}
            <button className="hero__nav-link" onClick={() => scrollTo('#kontak')}>Kontak</button>
          </nav>
        </motion.div>

        {/* Main Content */}
        <div className="hero__content">
          <motion.h1 className="hero__title" variants={fadeUpVariant}>
            Bangun Rumah Impian<br />
            mulai <span className="hero__title-mark">Rp&nbsp;3&nbsp;Juta</span>/m²<br />
            dalam 4 Bulan
          </motion.h1>
          <motion.p className="hero__desc" variants={fadeUpVariant}>
            Kami membangun rumah premium dengan material terbaik dan teknologi
            konstruksi modern. Dari konsultasi hingga serah terima kunci.
          </motion.p>
          <motion.div variants={fadeUpVariant}>
            <FlowButton text="Konsultasi Gratis" href="#kontak" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div className="hero__stats" variants={fadeUpVariant}>
          {STATS.map(({ img, value, label }, i) => (
            <div key={i} className="hero__stat">
              <img src={img} alt="" className="hero__stat-avatar" />
              <div className="hero__stat-value">{value}</div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ═══════════════ RIGHT PANEL ═══════════════ */}
      <div className="hero__right">

        {/* Floating action bar — kanan */}
        <div className="hero__right-bar">
          <button className="hero__right-cta" onClick={() => scrollTo('#kontak')}>
            ✦ Konsultasi Gratis
          </button>
          {/* Phone Highlight */}
          <a href="tel:+6285604867218" className="hero__right-phone">
            📞 +62 856-0486-7218
          </a>
        </div>

        {/* Full photo */}
        <img
          src={heroImg}
          alt="Rumah modern Bangun Griya Nuswantara"
          className="hero__photo"
        />
      </div>

    </section>
  );
}
