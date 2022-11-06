import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function HomeNavbar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/1008/186/png-transparent-gemstone-jewellery-diamond-logo-gemstone-gemstone-blue-angle-thumbnail.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            G.E.M Inventory
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
