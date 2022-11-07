import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function HomeNavbar({email}) {

  console.log('user email from',email)
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/421/376/png-transparent-gemstone-bejeweled-diamond-computer-icons-blue-gem-gemstone-blue-angle.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            G.E.M Inventory
          </Navbar.Brand>
          <h2>{email ? email.email : 'noEmail'}</h2>
        </Container>
      </Navbar>
    </div>
  )
}
