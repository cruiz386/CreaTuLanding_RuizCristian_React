import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = ({ cartCount }) => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Logo
          src="./src/assets/logo/logo_fdo_negro.png"
          alt="Logo CaSa footer negro"
          style={{ width: "70px", borderRadius: "30%", margin:"5px 50px" }}
        />
        <Navbar.Brand href="#home">CaSa Smart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
          </Nav>
          <CartWidget cartCount={cartCount} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
