import { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ServicesSection.css';

const ALL_MATERIALS = [
  { image: 'https://images.unsplash.com/photo-1585060544812-6b45742d7629?auto=format&fit=crop&q=80', title: 'Beton K300+', subtitle: 'Struktur Utama', desc: 'Campuran beton bermutu tinggi untuk memastikan pondasi kokoh.', price: 'Rp 850.000', unit: '/ m³' },
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f35aa27?auto=format&fit=crop&q=80', title: 'Baja Tulangan', subtitle: 'Standar SNI', desc: 'Rangka besi baja anti karat dengan toleransi tegangan maksimal.', price: 'Rp 75.000', unit: '/ batang' },
  { image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80', title: 'Bata & Hebel', subtitle: 'Dinding Kedap Suara', desc: 'Bata merah oven atau hebel bermutu untuk dinding sejuk.', price: 'Rp 650.000', unit: '/ kubik' },
  { image: 'https://images.unsplash.com/photo-1610505465579-281b67272847?auto=format&fit=crop&q=80', title: 'Kusen Premium', subtitle: 'Jati & Aluminium', desc: 'Kusen anti rayap yang kokoh dan tahan cuaca ekstrem.', price: 'Rp 150.000', unit: '/ meter' },
  { image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80', title: 'Pasir & Agregat', subtitle: 'Bahan Pengisi', desc: 'Pasir cuci bebas lumpur dan batu pecah berkualitas.', price: 'Rp 300.000', unit: '/ m³' },
  { image: 'https://images.unsplash.com/photo-1562259929-b7e181d8d9b5?auto=format&fit=crop&q=80', title: 'Cat Premium', subtitle: 'Finishing', desc: 'Cat dinding anti-jamur dengan ketahanan warna maksimal.', price: 'Rp 200.000', unit: '/ galon' },
  { image: 'https://images.unsplash.com/photo-1628745277861-12c823610931?auto=format&fit=crop&q=80', title: 'Genteng Keramik', subtitle: 'Atap Kokoh', desc: 'Genteng keramik berlapis glazur yang memantulkan panas.', price: 'Rp 12.000', unit: '/ pcs' },
  { image: 'https://images.unsplash.com/photo-1502005097973-ff586566e6c9?auto=format&fit=crop&q=80', title: 'Granit & Keramik', subtitle: 'Lantai Elegan', desc: 'Pilihan lantai granit presisi untuk tampilan interior mewah.', price: 'Rp 180.000', unit: '/ dus' },

  { image: 'https://images.unsplash.com/photo-1603039203525-e51b1424e8e1?auto=format&fit=crop&q=80', title: 'Kayu Solid', subtitle: 'Elemen Interior', desc: 'Papan kayu jati pilihan untuk aksen dekorasi ruang.', price: 'Rp 450.000', unit: '/ lembar' },
  { image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80', title: 'Kaca Tempered', subtitle: 'Jendela Eksterior', desc: 'Kaca tebal anti pecah dengan ketahanan benturan tinggi.', price: 'Rp 350.000', unit: '/ m²' },
  { image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80', title: 'Semen Portland', subtitle: 'Pengikat Konstruksi', desc: 'Semen kualitas premium yang cepat kering dan super kuat.', price: 'Rp 55.000', unit: '/ sak' },
  { image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80', title: 'Pipa PVC AW', subtitle: 'Instalasi Air', desc: 'Pipa saluran air tebal yang anti bocor dan tahan tekanan.', price: 'Rp 35.000', unit: '/ btg' },
  { image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80', title: 'Gypsum Plafon', subtitle: 'Langit-langit', desc: 'Papan gypsum rata sempurna yang anti lembab.', price: 'Rp 60.000', unit: '/ lembar' },
  { image: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?auto=format&fit=crop&q=80', title: 'Kabel Listrik SNI', subtitle: 'Instalasi Aman', desc: 'Kabel tembaga murni anti panas berstandar nasional.', price: 'Rp 350.000', unit: '/ rol' },
  { image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80', title: 'Marmer Import', subtitle: 'Finishing Mewah', desc: 'Batu alam marmer Italia untuk dapur dan lantai.', price: 'Rp 1.500.000', unit: '/ m²' },
  { image: 'https://images.unsplash.com/photo-1582269438753-33bc93c0bc02?auto=format&fit=crop&q=80', title: 'Baja Ringan', subtitle: 'Rangka Atap', desc: 'Baja ringan anti karat berlapis zinc aluminium.', price: 'Rp 95.000', unit: '/ btg' },

  { image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80', title: 'Batu Alam', subtitle: 'Fasad Depan', desc: 'Batu andesit presisi tinggi untuk dekorasi dinding luar.', price: 'Rp 120.000', unit: '/ m²' },
  { image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80', title: 'Cat Waterproof', subtitle: 'Pelapis Eksterior', desc: 'Cat pelapis anti bocor elastis untuk tembok luar.', price: 'Rp 250.000', unit: '/ pail' },
  { image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80', title: 'Handle Pintu', subtitle: 'Aksesoris Solid', desc: 'Gagang pintu bahan stainless steel anti karat elegan.', price: 'Rp 200.000', unit: '/ set' },
  { image: 'https://images.unsplash.com/photo-1565513222383-77291a27e77a?auto=format&fit=crop&q=80', title: 'Keramik Dinding', subtitle: 'Kamar Mandi', desc: 'Keramik tekstur matte yang tidak licin dan mudah dibersihkan.', price: 'Rp 85.000', unit: '/ dus' },
  { image: 'https://images.unsplash.com/photo-1604933939632-475267ff6125?auto=format&fit=crop&q=80', title: 'Wallpaper Premium', subtitle: 'Dekorasi Interior', desc: 'Kertas dinding vinyl dengan ragam motif mewah timbul.', price: 'Rp 150.000', unit: '/ roll' },
  { image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80', title: 'Lampu LED Downlight', subtitle: 'Pencahayaan', desc: 'Lampu hemat energi 12W dengan garansi pabrik 3 tahun.', price: 'Rp 45.000', unit: '/ pcs' },
  { image: 'https://images.unsplash.com/photo-1623910271017-91924610c144?auto=format&fit=crop&q=80', title: 'Perekat Keramik', subtitle: 'Mortar Instan', desc: 'Semen instan khusus untuk merekatkan keramik dan granit.', price: 'Rp 80.000', unit: '/ sak' },
  { image: 'https://images.unsplash.com/photo-1603503378564-9da2d8376991?auto=format&fit=crop&q=80', title: 'Toren Air', subtitle: 'Penampungan', desc: 'Tangki air kapasitas 1000 Liter dengan lapisan anti lumut.', price: 'Rp 1.200.000', unit: '/ unit' }
];



export default function ServicesSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(ALL_MATERIALS.length / ITEMS_PER_PAGE);
  const displayedMaterials = ALL_MATERIALS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handlePrev = () => {
    setPage(p => (p > 0 ? p - 1 : totalPages - 1));
  };
  
  const handleNext = () => {
    setPage(p => (p < totalPages - 1 ? p + 1 : 0));
  };

  return (
    <section className="material-section section section--gray" id="layanan">
      <div className="container relative">
        <motion.div 
          className="material-section__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Material Terbaik</span>
          <h2 className="section-title">Kualitas Bahan Bangunan Premium</h2>
        </motion.div>

        {/* Floating Navigation and Grid Wrapper */}
        <div style={{ position: 'relative' }}>
          <button className="nav-float nav-float--left" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-float nav-float--right" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>

          <div className="material-section__bento">
            {displayedMaterials.map(({ image, title, subtitle, desc, price, unit }, i) => {
              // Make some cards span 2 columns/rows for a Bento effect
              let bentoClass = 'm-card';
              if (i === 0 || i === 3) bentoClass += ' bento-large';
              if (i === 4 || i === 7) bentoClass += ' bento-wide';

              return (
                <div key={i} className={bentoClass}>
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
              );
            })}
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
