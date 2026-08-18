import { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import './ContactSection.css';

import { motion } from 'framer-motion';

const SERVICES = ['Jasa Bangun', 'Renovasi', 'Konsultasi', 'Info Material', 'Lainnya'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Nomor WhatsApp Tujuan (Ganti dengan nomor admin/perusahaan yang sebenarnya)
    const targetPhone = '6285604867218'; 
    
    // Format pesan template
    const textTemplate = `Halo Bangun Griya Nusantara,
Saya tertarik untuk berdiskusi lebih lanjut.

*Nama:* ${form.name}
*No. WA:* ${form.phone}
*Keperluan:* ${form.service}

*Pesan/Keterangan:*
${form.message}`;

    // Encode teks agar valid untuk URL
    const encodedText = encodeURIComponent(textTemplate);
    
    // Buka WhatsApp di tab baru
    window.open(`https://wa.me/${targetPhone}?text=${encodedText}`, '_blank');
    
    // Reset form opsional setelah diklik
    setForm({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="contact section section--dark" id="kontak">
      <div className="container contact__inner">

        {/* ── Left Info ── */}
        <motion.div 
          className="contact__info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label" style={{ color: 'rgba(255,255,255,.5)' }}>Hubungi Kami</span>
          <h2 className="section-title section-title--light">
            Konsultasikan<br />Proyek Anda
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', marginTop:'1rem', lineHeight:1.75, fontSize:'0.95rem' }}>
            Tim kami siap membantu mewujudkan rumah impian Anda. Konsultasi
            pertama selalu gratis tanpa syarat apapun.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <Phone size={18} />
              <span>+62 856-0486-7218</span>
            </div>
            <div className="contact__detail">
              <Mail size={18} />
              <span>info@bangungriya.com</span>
            </div>
            <div className="contact__detail">
              <MapPin size={18} />
              <span>Jl. Raya Bogor No.12, Jakarta Timur</span>
            </div>
          </div>
        </motion.div>

        {/* ── Right Form ── */}
        <motion.form 
          className="contact__form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="contact-name">Nama Lengkap *</label>
              <input id="contact-name" name="name" type="text" placeholder="Budi Santoso"
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-phone">Nomor WhatsApp *</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="0812xxxxxxxx"
                value={form.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="contact__row">
            <div className="contact__field" style={{ width: '100%' }}>
              <label htmlFor="contact-service">Keperluan *</label>
              <select id="contact-service" name="service" value={form.service} onChange={handleChange} required>
                <option value="">Pilih layanan...</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">Pesan *</label>
            <textarea id="contact-message" name="message" rows={4}
              placeholder="Ceritakan rencana bangunan Anda (luas tanah, tipe rumah, anggaran, dll)..."
              value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="contact__submit">
            Kirim via WhatsApp <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
