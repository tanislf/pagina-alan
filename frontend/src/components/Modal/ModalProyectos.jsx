import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const ModalProyectos = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  if (!project) return null;

  const sources = Array.isArray(project.src) ? project.src : [project.src];
  const hasMultiple = sources.length > 1;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % sources.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + sources.length) % sources.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-proyectos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-proyectos__content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-proyectos__close" onClick={onClose}>
              ×
            </button>
            
            <div className="modal-proyectos__image-wrapper">
              {/* Contenedor para Desktop (conserva botones y animaciones) */}
              <div className="modal-proyectos__desktop-carousel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="modal-proyectos__media-container"
                  >
                    {project.type === "video" ? (
                      <video
                        src={sources[currentIndex]}
                        className="modal-proyectos__image"
                        controls
                        autoPlay
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={sources[currentIndex]}
                        alt={`${project.title} - ${currentIndex + 1}`}
                        className="modal-proyectos__image"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Contenedor para Mobile (Touch/Scroll Horizontal) */}
              <div className="modal-proyectos__mobile-carousel">
                {sources.map((src, index) => (
                  <div key={index} className="modal-proyectos__mobile-slide">
                    {project.type === "video" ? (
                      <video src={src} className="modal-proyectos__image" controls playsInline />
                    ) : (
                      <img src={src} alt={`${project.title} ${index}`} className="modal-proyectos__image" />
                    )}
                  </div>
                ))}
              </div>

              {/*para múltiples imagenes en Desktop*/}
              {hasMultiple && (
                <div className="modal-proyectos__nav-container">
                  <button 
                    className="modal-proyectos__nav-btn modal-proyectos__nav-btn--prev" 
                    onClick={handlePrev}
                    aria-label="Anterior"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button 
                    className="modal-proyectos__nav-btn modal-proyectos__nav-btn--next" 
                    onClick={handleNext}
                    aria-label="Siguiente"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  
                  <div className="modal-proyectos__counter">
                    {currentIndex + 1} / {sources.length}
                  </div>
                </div>
              )}
              
              <div className="modal-proyectos__overlay">
                <p className="modal-proyectos__description">{project.description}</p>
              </div>
            </div>

            <footer className="modal-proyectos__footer">
              <h3 className="modal-proyectos__title">{project.title}</h3>
              <p className="modal-proyectos__meta">{project.year} | {project.category}</p>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProyectos;
