import { useEffect, FC } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

type ImageModalProps = {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
    likes: number;
    description?: string;
  } | null;
  onClose: () => void;
};

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={styles.modalContent}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalBody}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        <div className={styles.info}>
          <p>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p>
            <strong>Likes:</strong> {image.likes}
          </p>
          {image.description && (
            <p>
              <strong>Description:</strong> {image.description}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
