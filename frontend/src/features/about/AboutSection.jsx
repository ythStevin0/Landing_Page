import { ShieldCheck, Zap, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: 'Struktur Kokoh & Tahan Lama',
    desc: 'Menggunakan baja tulangan SNI dan beton mutu tinggi yang telah tersertifikasi untuk memastikan kekokohan bangunan.'
  },
  {
    Icon: Zap,
    title: 'Pengerjaan Tepat Waktu',
    desc: 'Manajemen proyek terstruktur dengan timeline yang jelas. Keterlambatan dikenakan penalti sesuai kontrak.'
  },
  {
    Icon: TreePine,
    title: 'Material Ramah Lingkungan',
    desc: 'Kami memilih material bangunan yang berkelanjutan dan ramah lingkungan untuk masa depan yang lebih baik.'
  },
];

export default function AboutSection() {
  return (
    <section className="about section section--gray" id="tentang">
      <div className="container about__inner">

        {/* ── Left ── */}
        <div className="about__left">
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-title">
            Membangun dengan<br />Teknologi Modern
          </h2>
          <p className="section-desc" style={{ marginTop: '1.25rem' }}>
            Bangun Griya Nusantara adalah kontraktor berpengalaman yang bergerak di
            bidang pembangunan rumah tinggal, renovasi, dan penyediaan material
            bangunan berkualitas di seluruh Indonesia.
          </p>

          {/* Frame illustration */}
          <div className="about__frame">
            <div className="about__frame-grid">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="about__frame-cell" />
              ))}
            </div>
            <div className="about__frame-overlay">
              <span className="about__frame-text">Konstruksi Terstandar SNI</span>
            </div>
          </div>
        </div>

        {/* ── Right: Feature Cards ── */}
        <div className="about__features">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.div 
              key={i} 
              className="about__card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <div className="about__card-icon">
                <Icon size={22} strokeWidth={2} />
              </div>
              <div>
                <h3 className="about__card-title">{title}</h3>
                <p className="about__card-desc">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
