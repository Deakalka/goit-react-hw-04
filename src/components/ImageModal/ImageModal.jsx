import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FiUser, FiHeart, FiCalendar, FiMapPin } from 'react-icons/fi';

const ImageModal = ({ isOpen = false, photo, onChange }) => {
  Modal.setAppElement(document.getElementById("root"));

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <img className={css.modalImg} src={photo.src} alt={photo.description} />
        
        <div className={css.modalInfo}>
          <h3 className={css.modalTitle}>Photo Information</h3>
          
          {photo.description && (
            <p className={css.modalDescription}>{photo.description}</p>
          )}
          
          <div className={css.modalDetails}>
            <div className={css.modalDetail}>
              <FiUser className={css.icon} />
              <span>
                <strong>Author:</strong> {photo.author}
                {photo.username && <span className={css.username}>@{photo.username}</span>}
              </span>
            </div>
            
            {photo.likes !== undefined && (
              <div className={css.modalDetail}>
                <FiHeart className={css.icon} />
                <span><strong>Likes:</strong> {photo.likes}</span>
              </div>
            )}
            
            {photo.date && (
              <div className={css.modalDetail}>
                <FiCalendar className={css.icon} />
                <span><strong>Date:</strong> {photo.date}</span>
              </div>
            )}
            
            {photo.location && (
              <div className={css.modalDetail}>
                <FiMapPin className={css.icon} />
                <span><strong>Location:</strong> {photo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <button className={css.closeButton} onClick={() => onChange(false)}>
        &times;
      </button>
    </Modal>
  );
};

export default ImageModal;