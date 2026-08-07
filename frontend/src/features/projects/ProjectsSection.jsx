import { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectsSection.css';

const PROJECTS = [
  { 
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', 
    title: 'Rumah Type 45', 
    location: 'Bekasi, Jawa Barat', 
    rating: '4.9', 
    reviews: 'Rp 450 Juta' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', 
    title: 'Rumah Type 70', 
    location: 'Depok, Jawa Barat', 
    rating: '4.8', 
    reviews: 'Rp 780 Juta' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', 
    title: 'Villa Premium', 
    location: 'Bogor, Jawa Barat', 
    rating: '5.0', 
    reviews: 'Rp 1,2 Miliar' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09c15468?auto=format&fit=crop&q=80', 
    title: 'Rumah Type 60', 
    location: 'Tangerang, Banten', 
    rating: '4.9', 
    reviews: 'Rp 620 Juta' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1605276374104-aa23776ab136?auto=format&fit=crop&q=80', 
    title: 'Rumah Minimalis', 
    location: 'Bandung, Jawa Barat', 
    rating: '4.8', 
    reviews: 'Rp 550 Juta' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80', 
    title: 'Rumah Type 90', 
    location: 'Jakarta Selatan', 
    rating: '5.0', 
    reviews: 'Rp 1,5 Miliar' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80', 
    title: 'Townhouse Modern', 
    location: 'Cibubur, Jakarta', 
    rating: '4.9', 
    reviews: 'Rp 950 Juta' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80', 
    title: 'Rumah Type 36', 
    location: 'Banten, Serang', 
    rating: '4.7', 
    reviews: 'Rp 320 Juta' 
  }
];

export default function ProjectsSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState('right');
  
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);
  const displayedProjects = PROJECTS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handlePrev = () => {
    setDirection('left');
    setPage(p => (p > 0 ? p - 1 : totalPages - 1));
  };
  
  const handleNext = () => {
    setDirection('right');
    setPage(p => (p < totalPages - 1 ? p + 1 : 0));
  };

  const handleDotClick = (i) => {
    setDirection(i > page ? 'right' : 'left');
    setPage(i);
  };

  return (
    <section className="projects section" id="portfolio">
      <div className="container">

        <div className="projects__head">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Katalog Proyek 2024</h2>
          </div>
          <div className="projects__head-right">
            <p className="section-desc">
              Koleksi proyek terbaik kami. Rumah idaman dengan desain estetis, dibangun menggunakan konstruksi modern dan aman.
            </p>
          </div>
        </div>

        <div key={page} className={`projects__grid slide-${direction}`}>
          {displayedProjects.map((p, i) => (
            <div key={i} className="p-card">
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

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev}><ChevronLeft size={20} /></button>
          <div className="carousel-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i} 
                className={`carousel-dot ${i === page ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={handleNext}><ChevronRight size={20} /></button>
        </div>

      </div>
    </section>
  );
}
