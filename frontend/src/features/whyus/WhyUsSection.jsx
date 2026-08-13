import { Star } from 'lucide-react';
import './WhyUsSection.css';

const REVIEWS = [
  { name: 'Budi Santoso', rating: 5, comment: 'Pembangunan rumah sangat cepat dan hasilnya memuaskan. Material yang digunakan benar-benar berkualitas premium seperti yang dijanjikan.' },
  { name: 'Siti Aminah', rating: 5, comment: 'Sangat terbantu dengan tim arsiteknya. Desain rumah saya jadi sangat modern dan elegan. Komunikasi juga sangat lancar.' },
  { name: 'Agus Pratama', rating: 4, comment: 'Proses pengerjaan tepat waktu, tidak meleset dari target. Hasil pengecoran juga rapi dan kokoh. Sukses terus Bangun Griya.' },
  { name: 'Rina Kusuma', rating: 5, comment: 'Kusen jati dan jendela aluminiumnya sangat halus buatannya. Rumah saya jadi terlihat sangat mewah dari depan. Terima kasih!' },
  { name: 'Hendro Wibowo', rating: 5, comment: 'Pelayanan yang profesional dari awal RAB hingga serah terima kunci. Sangat transparan soal harga material.' },
];

import { motion } from 'framer-motion';

export default function WhyUsSection() {
  return (
    <section className="whyus section" id="material">
      <div className="container">
        <motion.div 
          className="whyus__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Ulasan Pelanggan</span>
          <h2 className="section-title">Apa Kata Mereka Tentang<br />Layanan Kami?</h2>
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <div className="testimonial-track">
          {/* Render twice for seamless loop */}
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="testi-card">
              <div className="testi-card__stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill={idx < review.rating ? "#f59e0b" : "transparent"} color={idx < review.rating ? "#f59e0b" : "#d1d5db"} />
                ))}
              </div>
              <p className="testi-card__comment">"{review.comment}"</p>
              <div className="testi-card__author">
                <div className="testi-card__avatar">
                  {review.name.charAt(0)}
                </div>
                <strong>{review.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
