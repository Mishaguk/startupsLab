import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import styles from './StartupStyles.module.scss';

const StartupItem = ({ name, logoURL, description, id }) => {
  return (
    <Card style={{ width: '23rem', margin: '6px', marginBottom: '30px' }}>
      <div className={styles.cardImage}>
        <Card.Img variant="top" src={logoURL} />
      </div>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={styles.cardDescription}>{description}</Card.Text>
        <Button variant="primary">
          <Link
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            to={`/startups/startupDetail/${id}`}
          >
            More...
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default StartupItem;
