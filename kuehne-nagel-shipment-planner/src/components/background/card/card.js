import React from 'react';
import Card from 'react-bootstrap/Card';

function CardComponent({imageSrc, title, text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
    
  );
}

export default CardComponent;