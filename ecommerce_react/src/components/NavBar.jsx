import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context';
import './NavBar.css'; 

const NavBar = () => {
    const { cartCount } = useAppContext();

    return (
        <Navbar bg="black" variant="dark" expand="lg" className="mb-4 custom-navbar">
            <Container>
                <Link to="/CreaTuLanding_RuizCristian/">
                    <Logo
                        src={"https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/logo/logo_fdo_negro.png"}
                        alt="Logo CaSa footer negro"
                        style={{ width: "70px", borderRadius: "50%", margin: "10px 100px" ,border: "2px solid #444"}}
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
