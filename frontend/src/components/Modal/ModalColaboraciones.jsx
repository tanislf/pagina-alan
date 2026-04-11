import { motion, AnimatePresence } from "framer-motion";


const ModalColaboraciones = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-colaboraciones"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-colaboraciones__content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-colaboraciones__close" onClick={onClose}>
              ×
            </button>
            
            <div className="modal-colaboraciones__image-wrapper">
              <img
                src={project.src}
                alt={project.title}
                className="modal-colaboraciones__image"
              />
              <div className="modal-colaboraciones__overlay">
                <p className="modal-colaboraciones__description">{project.description}</p>
              </div>
            </div>

            <footer className="modal-colaboraciones__footer">
              <h3 className="modal-colaboraciones__title">{project.title}</h3>
              <p className="modal-colaboraciones__meta">{project.year} | {project.category}</p>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalColaboraciones;