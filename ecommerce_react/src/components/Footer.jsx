import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-center">
      
      <div className="container ">
        <div className="row">
        <Logo />
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Nosotros</h5>
            <ul className="list-unstyled mb-0 ">
              <li>
                <a href="#local" className="text-dark">Nuestro local</a>
              </li>
              <li>
                <a href="#contacto" className="text-dark" >Contáctenos</a>
              </li>       
              <li>
                <a href="#redes" className="text-dark">Nuestras redes</a>
                <div>
                  <FaFacebook className="m-2" />
                  <FaTwitter className="m-2" />
                  <FaInstagram className="m-2" />
                </div>
              </li>   
            </ul>
          </div>


          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Ayuda</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#pedido" className="text-dark">Estado del pedido</a>
              </li>
              <li>
                <a href="#devoluciones" className="text-dark">Devoluciones</a>
              </li>
              <li>
                <a href="#soporte" className="text-dark">Soporte</a>
              </li>
            </ul>
          </div>



        </div>
      </div>
      <Logo 
          src="./src/assets/logo/logo_fdo_bco.png" 
          alt="Logo CaSa footer blanco" 
          style={{ width: "50px", borderRadius: "30%", borderStyle: 'groove', margin:"20px" }}  
        />
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 CaSa Smart -  by @Cristian_Ruiz
        
      </div>
    </footer>
  );
};

export default Footer;
