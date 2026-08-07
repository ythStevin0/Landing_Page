import { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ServicesSection.css';

const MATERIALS = [
  {
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d7629?auto=format&fit=crop&q=80',
    title: 'Beton K300+',
    subtitle: 'Struktur Utama',
    desc: 'Campuran beton bermutu tinggi untuk memastikan pondasi kokoh dan anti-retak bertahun-tahun.',
    price: 'Rp 850.000',
    unit: '/ m³',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f35aa27?auto=format&fit=crop&q=80',
    title: 'Baja Tulangan',
    subtitle: 'Standar SNI',
    desc: 'Rangka besi baja anti karat yang memiliki toleransi tegangan tarik dan tekan yang maksimal.',
    price: 'Rp 75.000',
    unit: '/ batang',
  },
  {
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80',
    title: 'Bata & Hebel',
    subtitle: 'Dinding Kedap Suara',
    desc: 'Bata merah oven atau hebel bermutu untuk menjaga suhu ruangan agar lebih sejuk dan nyaman.',
    price: 'Rp 650.000',
    unit: '/ kubik',
  },
  {
    image: 'https://images.unsplash.com/photo-1610505465579-281b67272847?auto=format&fit=crop&q=80',
    title: 'Kusen Premium',
    subtitle: 'Jati & Aluminium',
    desc: 'Kusen pilihan yang tahan cuaca ekstrem serta anti dari segala jenis serangan rayap.',
    price: 'Rp 150.000',
    unit: '/ meter',
  },
  {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80',
    title: 'Pasir & Agregat',
    subtitle: 'Bahan Pengisi',
    desc: 'Pasir cuci bebas lumpur dan batu pecah berkualitas untuk adukan beton yang solid.',
    price: 'Rp 300.000',
    unit: '/ m³',
  },
  {
    image: 'https://images.unsplash.com/photo-1562259929-b7e181d8d9b5?auto=format&fit=crop&q=80',
    title: 'Cat Premium',
    subtitle: 'Finishing Interior & Eksterior',
    desc: 'Cat dinding anti-jamur dengan ketahanan warna yang awet meski terkena cuaca ekstrem.',
    price: 'Rp 200.000',
    unit: '/ galon',
  },
  {
    image: 'https://images.unsplash.com/photo-1628745277861-12c823610931?auto=format&fit=crop&q=80',
    title: 'Genteng Keramik',
    subtitle: 'Atap Kokoh',
    desc: 'Genteng keramik berlapis glazur yang tidak mudah bocor dan memantulkan panas dengan baik.',
    price: 'Rp 12.000',
    unit: '/ pcs',
  },
  {
    image: 'https://images.unsplash.com/photo-1502005097973-ff586566e6c9?auto=format&fit=crop&q=80',
    title: 'Granit & Keramik',
    subtitle: 'Lantai Elegan',
    desc: 'Pilihan lantai granit presisi tinggi untuk tampilan interior rumah yang mewah dan bersih.',
    price: 'Rp 180.000',
    unit: '/ dus',
  }
];

export default function ServicesSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState('right');

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(MATERIALS.length / ITEMS_PER_PAGE);
  const displayedMaterials = MATERIALS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

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
    <section className="material-section section section--gray" id="layanan">
      <div className="container">
        <div className="material-section__head">
          <span className="section-label">Material Terbaik</span>
          <h2 className="section-title">Kualitas Bahan Bangunan Premium</h2>
        </div>

        <div key={page} className={`material-section__grid slide-${direction}`}>
          {displayedMaterials.map(({ image, title, subtitle, desc, price, unit }, i) => (
            <div key={i} className="m-card">
              <div className="m-card__image-wrapper">
                <img src={image} alt={title} className="m-card__image" />
              </div>
              <div className="m-card__body">
                <div className="m-card__header">
                  <div>
                    <h3 className="m-card__title">{title}</h3>
                    <p className="m-card__subtitle">{subtitle}</p>
                  </div>
                  <button className="m-card__heart">
                    <Heart size={15} />
                  </button>
                </div>
                <p className="m-card__desc">{desc}</p>
                
                <div className="m-card__footer">
                  <div className="m-card__price-wrap">
                    <strong className="m-card__price">{price}</strong>
                    <span className="m-card__unit">{unit}</span>
                  </div>
                  <button className="m-card__btn" onClick={() => setSelectedImage(image)}>See more</button>
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

      {/* Image Modal Overlay */}
      {selectedImage && (
        <div className="m-modal" onClick={() => setSelectedImage(null)}>
          <button className="m-modal__close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Full Material" className="m-modal__image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
