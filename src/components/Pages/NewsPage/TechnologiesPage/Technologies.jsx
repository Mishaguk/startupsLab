import Card from 'react-bootstrap/Card';
import styles from '../news.module.css';
import technologieStyles from './Technologies.module.scss';
const Technologies = () => {
  return (
    <>
      <div className={styles.main}>
        <Card style={{ width: '70rem' }} border="success">
          <Card.Img
            className={styles.image}
            variant="top"
            src="https://www.edn.com/wp-content/uploads/Fig-1-BMS-Architecture-1.jpg?resize=950%2C584?w=1024"
          />
          <Card.Body className={technologieStyles.card}>
            <Card.Title>
              <a
                className={technologieStyles}
                href="https://www.edn.com/optimizing-state-of-charge-soc-accuracy-in-bms-designs/"
              >
                {' '}
                Optimizing state-of-charge (SOC) accuracy in BMS designs{' '}
              </a>
            </Card.Title>
            <Card.Text>
              One of the most important parameters for a battery management
              system (BMS) is the accuracy of its SOC{' '}
              <a
                className={styles.readMore}
                href="https://www.edn.com/pogocam-the-commendable-implementation-of-a-creepy-concept/"
              >
                read more...
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '70rem' }} border="success">
          <Card.Img
            className={styles.image}
            variant="top"
            src="https://www.edn.com/wp-content/uploads/camera-module_pcb_partial-removal3.jpg?w=1024"
          />
          <Card.Body className={technologieStyles.card}>
            <Card.Title className={styles.cardTitle}>
              <a
                className={technologieStyles}
                href="https://www.edn.com/pogocam-the-commendable-implementation-of-a-creepy-concept/"
              >
                PogoCam: The commendable implementation of a creepy concept
              </a>
            </Card.Title>
            <Card.Text>
              Just because a product idea is fundamentally flawed doesn’t mean
              that its implementation isn’t still impressive. Hopefully, the
              development team’s efforts led to more successful results their
              next{' '}
              <a
                className={styles.readMore}
                href="https://www.edn.com/pogocam-the-commendable-implementation-of-a-creepy-concept/"
              >
                read more...
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Technologies;
