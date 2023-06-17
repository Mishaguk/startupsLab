import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const StartupItem = ({ name, logoURL, description }) => {
  return (
    <div>
      <Card style={{ width: '24rem' }}>
        <div className="imgContainer">
          <Card.Img variant="top" src={logoURL} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">More...</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default StartupItem;
