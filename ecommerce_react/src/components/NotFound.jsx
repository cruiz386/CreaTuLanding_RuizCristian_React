import React from 'react'; // Importa React para definir el componente funcional.
import './NotFound.css'; // Importa el archivo CSS para aplicar estilos personalizados a la página de error 404.

const NotFound = () => {
    return (
        <div className="not-found-container">
            {/* Contenedor principal para la página de error 404 */}
            <h1>Página no encontrada</h1>
            
            <img 
                src={'./src/assets/NotFound.avif'} 
                alt="Página no encontrada" 
                className="not-found-image" 
            />
           
            <h3>Lo sentimos, la página que buscas no está disponible.</h3>
            
        </div>
    );
};

export default NotFound; // Exporta el componente NotFound para su uso en otras partes de la aplicación.
