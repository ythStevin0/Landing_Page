import heroImg from '../../assets/hero-house.png';
import './HeroSection.css';

const NAV_LINKS = ['Layanan', 'Portfolio', 'Material', 'FAQ'];

const STATS = [
  { img: heroImg, value: '150+', label: 'Proyek selesai sejak 2014' },
  { img: heroImg, value: '10+',  label: 'Tahun garansi struktur' },
  { img: heroImg, value: '500+', label: 'Klien puas di Indonesia' },
];

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="beranda">

      {/* ═══════════════ LEFT PANEL ═══════════════ */}
      <div className="hero__left">

        {/* Mini Navbar — kiri */}
        <div className="hero__left-nav">
          <div className="hero__logo">
            <span className="hero__logo-icon">BGN</span>
            <span className="hero__logo-text">
              Bangun Griya<br /><strong>Nusantara</strong>
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
        </div>

        {/* Main Content */}
        <div className="hero__content">
          <h1 className="hero__title">
            Bangun Rumah Impian<br />
            mulai <span className="hero__title-mark">Rp&nbsp;3&nbsp;Juta</span>/m²<br />
            dalam 4 Bulan
          </h1>
          <p className="hero__desc">
            Kami membangun rumah premium dengan material terbaik dan teknologi
            konstruksi modern. Dari konsultasi hingga serah terima kunci.
          </p>
          <button className="hero__cta" onClick={() => scrollTo('#kontak')}>
            Konsultasi Gratis →
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {STATS.map(({ img, value, label }, i) => (
            <div key={i} className="hero__stat">
              <img src={img} alt="" className="hero__stat-avatar" />
              <div className="hero__stat-value">{value}</div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ RIGHT PANEL ═══════════════ */}
      <div className="hero__right">

        {/* Floating action bar — kanan */}
        <div className="hero__right-bar">
          <button className="hero__right-cta" onClick={() => scrollTo('#kontak')}>
            ✦ Konsultasi Gratis
          </button>
          <a href="tel:+6281234567890" className="hero__right-phone">
            📞 +62 812-3456-7890
          </a>
        </div>

        {/* Full photo */}
        <img
          src={heroImg}
          alt="Rumah modern Bangun Griya Nusantara"
          className="hero__photo"
        />
      </div>

    </section>
  );
}
