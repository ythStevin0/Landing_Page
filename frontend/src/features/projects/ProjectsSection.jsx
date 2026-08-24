import { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsSection.css';

const ALL_PROJECTS = [
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', title: 'Rumah Type 45', location: 'Bekasi, Jawa Barat', rating: '4.9', reviews: 'Rp 450 Juta', height: 350 },
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', title: 'Rumah Type 70', location: 'Depok, Jawa Barat', rating: '4.8', reviews: 'Rp 780 Juta', height: 450 },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', title: 'Villa Premium', location: 'Bogor, Jawa Barat', rating: '5.0', reviews: 'Rp 1,2 Miliar', height: 380 },
  { img: 'https://images.unsplash.com/photo-1600607687920-4e2a09c15468?auto=format&fit=crop&q=80', title: 'Rumah Type 60', location: 'Tangerang, Banten', rating: '4.9', reviews: 'Rp 620 Juta', height: 500 },
  { img: 'https://images.unsplash.com/photo-1605276374104-aa23776ab136?auto=format&fit=crop&q=80', title: 'Rumah Minimalis', location: 'Bandung, Jawa Barat', rating: '4.8', reviews: 'Rp 550 Juta', height: 420 },
  { img: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80', title: 'Rumah Type 90', location: 'Jakarta Selatan', rating: '5.0', reviews: 'Rp 1,5 Miliar', height: 320 },
  { img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80', title: 'Townhouse Modern', location: 'Cibubur, Jakarta', rating: '4.9', reviews: 'Rp 950 Juta', height: 480 },
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80', title: 'Rumah Type 36', location: 'Banten, Serang', rating: '4.7', reviews: 'Rp 320 Juta', height: 380 },
  
  { img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80', title: 'Villa Pegunungan', location: 'Puncak, Bogor', rating: '5.0', reviews: 'Rp 2,5 Miliar', height: 420 },
  { img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80', title: 'Cluster Exclusive', location: 'Bintaro, Tangerang', rating: '4.8', reviews: 'Rp 1,1 Miliar', height: 350 },
  { img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&q=80', title: 'Rumah Klasik Modern', location: 'Surabaya, Jatim', rating: '4.9', reviews: 'Rp 2,1 Miliar', height: 450 },
  { img: 'https://images.unsplash.com/photo-1628012198051-50e8d2f128c7?auto=format&fit=crop&q=80', title: 'Rumah Tropis', location: 'Bali, Indonesia', rating: '5.0', reviews: 'Rp 3,5 Miliar', height: 380 },
  { img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80', title: 'Penthouse Mewah', location: 'Sudirman, Jakarta', rating: '5.0', reviews: 'Rp 5,5 Miliar', height: 500 },
  { img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80', title: 'Apartemen Studio', location: 'Margonda, Depok', rating: '4.7', reviews: 'Rp 450 Juta', height: 320 },
  { img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80', title: 'Rumah Taman', location: 'Malang, Jatim', rating: '4.9', reviews: 'Rp 850 Juta', height: 480 },
  { img: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&q=80', title: 'Rumah Hook', location: 'Kelapa Gading, JKT', rating: '4.8', reviews: 'Rp 1,8 Miliar', height: 380 },

  { img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80', title: 'Rumah Skandinavia', location: 'BSD City, Tangerang', rating: '4.9', reviews: 'Rp 1,4 Miliar', height: 380 },
  { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80', title: 'Vila Tepi Pantai', location: 'Lombok, NTB', rating: '5.0', reviews: 'Rp 4,2 Miliar', height: 500 },
  { img: 'https://images.unsplash.com/photo-1502672260266-1c15a6222046?auto=format&fit=crop&q=80', title: 'Rumah Bata Ekspos', location: 'Yogyakarta', rating: '4.8', reviews: 'Rp 750 Juta', height: 420 },
  { img: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80', title: 'Rumah Kayu Modern', location: 'Lembang, Bandung', rating: '4.9', reviews: 'Rp 950 Juta', height: 320 },
  { img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&q=80', title: 'Rumah Kaca Minimalis', location: 'Semarang, Jateng', rating: '5.0', reviews: 'Rp 2,2 Miliar', height: 480 },
  { img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80', title: 'Gaya Industrial', location: 'Kemang, Jakarta', rating: '4.8', reviews: 'Rp 3,1 Miliar', height: 350 },
  { img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80', title: 'Konsep Zen Jepang', location: 'Sentul, Bogor', rating: '4.9', reviews: 'Rp 1,6 Miliar', height: 450 },
  { img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80', title: 'Rumah Mewah 3 Lantai', location: 'Pondok Indah, JKT', rating: '5.0', reviews: 'Rp 8,5 Miliar', height: 380 }
];



export default function ProjectsSection() {
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(ALL_PROJECTS.length / ITEMS_PER_PAGE);
  const displayedProjects = ALL_PROJECTS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handlePrev = () => {
    setPage(p => (p > 0 ? p - 1 : totalPages - 1));
  };
  
  const handleNext = () => {
    setPage(p => (p < totalPages - 1 ? p + 1 : 0));
  };

  return (
    <section className="projects section" id="portfolio">
      <div className="container relative">
        <motion.div 
          className="projects__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Katalog Proyek 2024</h2>
          </div>
          <div className="projects__head-right">
            <p className="section-desc">
              Koleksi proyek terbaik kami. Rumah idaman dengan desain estetis, dibangun menggunakan konstruksi modern dan aman.
            </p>
          </div>
        </motion.div>

        {/* Floating Navigation and Grid Wrapper */}
        <div style={{ position: 'relative' }}>
          <button className="nav-float nav-float--left" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-float nav-float--right" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>

          <div className="projects__masonry">
            {displayedProjects.map((p, i) => (
              <div key={i} className="p-card" style={{ height: p.height }}>
                <img src={p.img} alt={p.title} className="p-card__bg" />
                <div className="p-card__overlay" />
                
                <button className="p-card__heart">
                  <Heart size={16} />
                </button>

                <div className="p-card__content">
                  <h3 className="p-card__title">{p.title}</h3>
                  <p className="p-card__subtitle">{p.location}</p>
                  
                  <div className="p-card__rating">
                    <Star size={14} fill="currentColor" />
                    <span>{p.rating}</span>
                    <span style={{ opacity: 0.7, margin: '0 4px' }}>•</span>
                    <span style={{ opacity: 0.8 }}>{p.reviews}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Page Indicator */}
        <div className="page-indicator">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button 
              key={idx} 
              className={`page-dot ${page === idx ? 'active' : ''}`}
              onClick={() => setPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
