import styles from './LoadMoreBtn.module.css';
import { FC } from 'react';

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
