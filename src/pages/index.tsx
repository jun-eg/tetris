import { useState } from 'react';
import { Stone } from '../components/Stone';
import styles from './index.module.css';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <Stone count={count} onClick={setCount} />
    </div>
  );
};

export default Home;
