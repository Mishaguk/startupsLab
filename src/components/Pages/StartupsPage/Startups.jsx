import info from './startupsInfo';
import StartupItem from './StartupItem';
import styles from './StartupStyles.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

const Startups = () => {
  return (
    <div className={styles.startupsContainer}>
      {info.map((item) => (
        <StartupItem {...item} key={item.id} />
      ))}
    </div>
  );
};
export default Startups;
