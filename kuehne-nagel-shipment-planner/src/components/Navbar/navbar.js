import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from '../Navbar/logo/test.webp';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand 
          href="/">
          <img
            src={logoImage} 
            alt="Kuehne+Nagel"
            style={{
              maxWidth: '200px',
              maxHeight: '100px',
              width: 'auto',
              height: 'auto',
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/crud">CRUD</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Q&A">Q&A</NavDropdown.Item>
              <NavDropdown.Item href="/about">
                About us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">
                Contact Me
              </NavDropdown.Item>
            </NavDropdown>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Some more info</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                This is made for implementation purposes. 
                I mean, that i don't really know what to put here...
                but it's here.
              </Offcanvas.Body>
            </Offcanvas>
            <Button variant="primary" className='Launch' onClick={handleShow}>
              Press me
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;