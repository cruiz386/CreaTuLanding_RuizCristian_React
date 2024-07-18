import React from 'react';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>Página no encontrada</h1>
            <img src={'./src/assets/NotFound.avif'} alt="Página no encontrada" className="not-found-image" />
            <h3>Lo sentimos, la página que buscas no está disponible.</h3>
        </div>
    );
};

export default NotFound;