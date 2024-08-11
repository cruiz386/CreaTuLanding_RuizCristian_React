import React from 'react'; // Importa React para poder usar JSX en este componente.
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap para el diseño del componente.
import Logo from './Logo'; // Importa el componente Logo desde un archivo local.
import { Link } from 'react-router-dom'; // Importa el componente Link para la navegación interna en la aplicación.
import './Footer.css'; // Importa los estilos específicos del componente Footer desde un archivo CSS.

const Footer = () => {
  return (
    <footer className="footer">
      {/* Crea un enlace que apunta a la ruta raíz del sitio, con el logo dentro del enlace */}
      <Link to="/CreaTuLanding_RuizCristian/" className="footer-logo">
        {/* Renderiza el componente Logo con las propiedades src y alt */}
        <Logo 
          src="https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/logo/logo_fdo_bco.png" 
          alt="Logo CaSa footer blanco" 
        />
      </Link>
      {/* Div que contiene el texto del footer */}
      <div className="footer-text">
        {/* Texto con el año y un enlace a la cuenta de Twitter del creador */}
        © 2024 CaSa Smart - by <a href="https://twitter.com/Cristian_Ruiz" target="_blank" rel="noopener noreferrer">@Cristian_Ruiz</a>
      </div>
    </footer>
  );
};

export default Footer; // Exporta el componente Footer para que pueda ser utilizado en otras partes de la aplicación.
