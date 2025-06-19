import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { FC } from 'react';
import { Image } from '../../types'; // Тип для зображення

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
