import { motion, AnimatePresence } from "framer-motion";


const ModalProyectos = ({ isOpen, onClose, project }) => {
  if (!project) return null;

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
              <img
                src={project.src}
                alt={project.title}
                className="modal-proyectos__image"
              />
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
