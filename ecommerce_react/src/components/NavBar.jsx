import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getCartCount = () => {
      const storedCart = localStorage.getItem('cart');
      const cart = storedCart ? JSON.parse(storedCart) : [];
      const totalProductos = cart.reduce((count, item) => count + item.quantity, 0);
      setCartCount(totalProductos);
    };

    getCartCount();
    window.addEventListener('storage', getCartCount);

    return () => {
      window.removeEventListener('storage', getCartCount);
    };
  }, []);


  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Link to="/CreaTuLanding_RuizCristian/">
          <Logo
            src="./src/assets/logo/logo_fdo_negro.png"
            alt="Logo CaSa footer negro"
            style={{ width: "70px", borderRadius: "30%", margin: "5px 50px" }}
          />
        </Link>
        <Navbar.Brand as={Link} to="/CreaTuLanding_RuizCristian/">CaSa Smart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/CreaTuLanding_RuizCristian/">Home</Nav.Link>

            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Assistant">Smart Assistant</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Cam">Smart Cam</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Display">Smart Display</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Light">Smart Light</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Plug">Smart Plug</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Link to="/CreaTuLanding_RuizCristian/cart">
            <CartWidget cartCount={cartCount} />
          </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

