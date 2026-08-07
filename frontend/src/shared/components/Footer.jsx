import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">BGN</span>
            <span className="footer__logo-text">Bangun Griya<br /><strong>Nusantara</strong></span>
          </div>
          <p className="footer__tagline">Membangun impian Anda dengan kualitas terbaik dan integritas penuh.</p>
        </div>
        <div className="footer__col">
          <h4>Layanan</h4>
          <ul>
            <li><a href="#layanan">Jasa Bangun Rumah</a></li>
            <li><a href="#layanan">Renovasi</a></li>
            <li><a href="#material">Katalog Material</a></li>
            <li><a href="#kontak">Konsultasi Gratis</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Perusahaan</h4>
          <ul>
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Kontak</h4>
          <ul>
            <li>+62 812-3456-7890</li>
            <li>info@bangungriya.com</li>
            <li>Jl. Raya Bogor No.12,<br />Jakarta Timur</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Bangun Griya Nusantara. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
