import React from 'react'; // Importa React para definir el componente funcional.
import CartWidget from './CartWidget'; // Importa el componente CartWidget para mostrar el icono del carrito y el conteo de productos.
import Logo from './Logo'; // Importa el componente Logo para mostrar el logo en la barra de navegación.
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'; // Importa componentes de Bootstrap para crear una barra de navegación.
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router para la navegación entre páginas.
import { useAppContext } from './Context'; // Importa el hook useAppContext para acceder al contexto de la aplicación.
import './NavBar.css'; // Importa el archivo CSS para aplicar estilos personalizados a la barra de navegación.

const NavBar = () => {
  const { cartCount } = useAppContext(); // Obtiene el número de productos en el carrito desde el contexto de la aplicación.

  return (
    <Navbar bg="black" variant="dark" expand="lg" className="mb-4 custom-navbar">
      {/* Componente Navbar de Bootstrap configurado con un fondo negro, variante oscura y expansión en pantallas grandes. */}
      <Container>
        <Link to="/CreaTuLanding_RuizCristian/">
          {/* Enlace a la página principal. */}
          <Logo
            src="https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/logo/logo_fdo_negro.png"
            alt="Logo CaSa footer negro"
            style={{
              width: '70px',
              borderRadius: '50%',
              margin: '10px 100px',
              border: '2px solid #444'
            }}
          />
        </Link>
        <Navbar.Brand as={Link} to="/CreaTuLanding_RuizCristian/">
          {/* Título de la barra de navegación que actúa como un enlace a la página principal. */}
          CaSa Smart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Botón de alternancia para mostrar/ocultar el menú en dispositivos móviles. */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Contenedor para los elementos de navegación que se expanden o contraen. */}
          <Nav className="me-auto">
            {/* Contenedor para los enlaces de navegación. */}
            <Nav.Link as={Link} to="/CreaTuLanding_RuizCristian/">
              {/* Enlace a la página principal. */}
              Home
            </Nav.Link>
            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              {/* Menú desplegable para las categorías de productos. */}
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Assistant">
                Smart Assistant
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Cam">
                Smart Cam
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Display">
                Smart Display
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Light">
                Smart Light
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CreaTuLanding_RuizCristian/category/Smart-Plug">
                Smart Plug
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/CreaTuLanding_RuizCristian/cart">
            {/* Enlace al carrito de compras que contiene el componente CartWidget. */}
            <CartWidget cartCount={cartCount} />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar; // Exporta el componente NavBar para que pueda ser utilizado en otras partes de la aplicación.
