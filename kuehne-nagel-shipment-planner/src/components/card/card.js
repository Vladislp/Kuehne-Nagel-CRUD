import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function cardComponent({imageSrc, title, text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default cardComponent;