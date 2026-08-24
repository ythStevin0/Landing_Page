import { ShieldCheck, Zap, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: 'Struktur Kokoh & Tahan Lama',
    desc: 'Menggunakan baja tulangan SNI dan beton mutu tinggi yang telah tersertifikasi untuk memastikan kekokohan bangunan.',
  },
  {
    Icon: Zap,
    title: 'Pengerjaan Tepat Waktu',
    desc: 'Manajemen proyek terstruktur dengan timeline yang jelas. Keterlambatan dikenakan penalti sesuai kontrak.',
  },
  {
    Icon: TreePine,
    title: 'Material Ramah Lingkungan',
    desc: 'Kami memilih material bangunan yang berkelanjutan dan ramah lingkungan untuk masa depan yang lebih baik.',
  },
];

export default function AboutSection() {
  return (
    <section className="about section section--gray" id="tentang">
      <div className="container">
        {/* Header */}
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-title">
            Membangun dengan<br />Teknologi Modern
          </h2>
          <p className="section-desc" style={{ marginTop: '1.25rem' }}>
            Bangun Griya Nuswantara adalah kontraktor berpengalaman yang bergerak di
            bidang pembangunan rumah tinggal, renovasi, dan penyediaan material
            bangunan berkualitas di seluruh Indonesia.
          </p>
        </motion.div>

        {/* Hub & Spoke Layout */}
        <div className="about__hub-spoke">
          {/* SVG connector lines */}
          <svg className="about__connectors" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
            {/* Line from center circle to top-left card */}
            <motion.line
              x1="50%" y1="50%" x2="12%" y2="50%"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {/* Line from center circle to top-right card */}
            <motion.line
              x1="50%" y1="50%" x2="88%" y2="20%"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            {/* Line from center circle to bottom-right card */}
            <motion.line
              x1="50%" y1="50%" x2="76%" y2="90%"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
            />
          </svg>

          {/* Center Circle (Hub) */}
          <motion.div
            className="about__hub"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              alt="Tim Profesional"
              className="about__hub-img"
            />
            <div className="about__hub-overlay">
              <span className="about__hub-label">Tim Profesional & Berpengalaman</span>
            </div>
          </motion.div>

          {/* Spoke Cards */}
          {FEATURES.map(({ Icon, title, desc }, i) => {
            const positions = ['about__spoke--top-left', 'about__spoke--top-right', 'about__spoke--bottom-right'];
            return (
              <motion.div
                key={i}
                className={`about__spoke ${positions[i]}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
              >
                <div className="about__spoke-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="about__spoke-title">{title}</h3>
                <p className="about__spoke-desc">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
