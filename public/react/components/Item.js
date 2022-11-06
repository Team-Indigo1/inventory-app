import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = (props) => {

  return <div className='item'>
     <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
        {props.item.description}
        </Card.Text>
        <Card.Text>
        {props.item.price}
        </Card.Text>
        <Button variant="primary">Track Item</Button>
        <Button variant="primary">Go Back</Button>
      </Card.Body>
    </Card>
    </div>
} 