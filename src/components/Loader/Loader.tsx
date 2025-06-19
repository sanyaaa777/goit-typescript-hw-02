import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color={'#123abc'} loading={true} />
    </div>
  );
};

export default Loader;
