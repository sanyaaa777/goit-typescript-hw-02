import { useEffect, FC } from 'react';
import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
  onRetry: () => void;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => {
  useEffect(() => {
    const timer = setTimeout(() => onRetry(), 4000);
    return () => clearTimeout(timer);
  }, [onRetry]);

  return (
    <div className={styles.error}>
      <p>{message}</p>
      <button className={styles.retryBtn} onClick={onRetry}>Try again</button>
    </div>
  );
};

export default ErrorMessage;
