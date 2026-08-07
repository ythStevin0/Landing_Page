import { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import api from '../../shared/services/api';
import './ContactSection.css';

const SERVICES = ['Jasa Bangun', 'Renovasi', 'Konsultasi', 'Info Material', 'Lainnya'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.post('/contacts', form);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact section section--dark" id="kontak">
      <div className="container contact__inner">

        {/* ── Left Info ── */}
        <div className="contact__info">
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
              <span>+62 812-3456-7890</span>
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
        </div>

        {/* ── Right Form ── */}
        <form className="contact__form" onSubmit={handleSubmit}>
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
            <div className="contact__field">
              <label htmlFor="contact-email">Email (opsional)</label>
              <input id="contact-email" name="email" type="email" placeholder="budi@email.com"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="contact__field">
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

          {status === 'success' && (
            <div className="contact__alert contact__alert--success">
              ✅ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
            </div>
          )}
          {status === 'error' && (
            <div className="contact__alert contact__alert--error">
              ❌ Gagal mengirim pesan. Silakan coba lagi.
            </div>
          )}

          <button type="submit" className="contact__submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Mengirim...' : (
              <><Send size={16} /> Kirim Pesan</>
            )}
          </button>
        </form>

      </div>
    </section>
  );
}
