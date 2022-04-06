import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss'

const Home = () => (
  <div className={styles.wrapper}>
    <Heading text={'Hello from NextJS'} />
  </div>
);

export default Home;