import styles from './ImageCard.module.css';
import { FC } from 'react';

type ImageCardProps = {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
  onClick: () => void;
};

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
