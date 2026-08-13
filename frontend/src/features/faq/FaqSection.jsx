import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FaqSection.css';

const FAQS = [
  { q: 'Berapa harga bangun rumah per meter persegi?', a: 'Harga bervariasi tergantung spesifikasi material dan desain. Kisaran umum mulai dari Rp 3 juta/m² untuk standar, hingga Rp 8 juta/m² untuk premium. Kami menyediakan konsultasi gratis untuk estimasi biaya yang akurat.' },
  { q: 'Berapa lama waktu pengerjaan pembangunan rumah?', a: 'Untuk rumah type 36-45 biasanya memerlukan 3-4 bulan, type 70-90 sekitar 5-6 bulan, dan type di atas 100m² bisa 7-12 bulan. Waktu pengerjaan dicantumkan dalam kontrak dan kami berkomitmen menepatinya.' },
  { q: 'Apakah ada garansi setelah bangunan selesai?', a: 'Ya, kami memberikan garansi struktur selama 10 tahun dan garansi finishing selama 1 tahun. Jika ada kerusakan akibat pengerjaan dalam masa garansi, kami perbaiki tanpa biaya tambahan.' },
  { q: 'Apakah bisa membangun dengan desain sendiri?', a: 'Tentu! Anda bisa menggunakan desain sendiri atau konsultasikan dengan tim arsitek kami. Kami juga menyediakan layanan desain arsitektur dan interior jika dibutuhkan.' },
  { q: 'Bagaimana cara memulai proyek pembangunan?', a: 'Hubungi kami melalui form kontak atau WhatsApp. Tim kami akan menjadwalkan survei lokasi gratis, kemudian menyiapkan RAB dan proposal desain dalam 3-5 hari kerja.' },
];

import { motion } from 'framer-motion';

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq section" id="faq">
      <div className="container faq__inner">
        <motion.div 
          className="faq__left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="section-desc" style={{ marginTop: '1rem' }}>
            Tidak menemukan jawaban yang kamu cari? Hubungi kami langsung.
          </p>
          <a href="#kontak" className="faq__cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Tanya Langsung →
          </a>
        </motion.div>
        <motion.div 
          className="faq__list"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {FAQS.map((item, i) => (
            <div key={i} className={`faq__item ${open === i ? 'faq__item--open' : ''}`}>
              <button className="faq__question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <ChevronDown size={18} className="faq__chevron" />
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
