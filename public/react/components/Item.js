import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export const Item = (props) => {

  return <div className='item'>
     <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={props.item.image} style={{ width: '150px', height: '150px', }} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
        {props.item.description.substring(0,100)+"..."}
        </Card.Text>
        <Card.Text>
        {props.item.price}
        </Card.Text>
        <Stack gap={2}>
        <Button variant="primary" >Track Item</Button>
        <Button variant="primary">Go Back</Button>
        </Stack>
        
      </Card.Body>
    </Card>
    </div>
} 