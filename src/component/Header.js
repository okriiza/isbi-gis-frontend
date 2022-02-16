import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import isbilogo from '../image/isbilogo.png';

export default function Header() {
  return <div>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <div className="d-flex align-items-center">
            <img
              alt="isbilogo"
              src={isbilogo}
              width="65"
              height="65"
              className="d-inline-block align-top ms-2"
            />{' '}
            <span className="ms-2 fs-5 fw-bolder">Institut Seni Budaya Indonesia</span>
          </div>
        </Navbar.Brand>
        <div className="mx-auto text-white">
          <div className="fs-4 text-center fw-bolder">
            GIS <br />
            Peta Budaya JawaBarat
          </div>
        </div>
      </Container>
    </Navbar>
  </div>;
}
