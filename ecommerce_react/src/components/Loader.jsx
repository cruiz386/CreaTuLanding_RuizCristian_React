import React from 'react'; // Importa React para poder definir el componente.
import './Loader.css'; // Importa el archivo CSS para aplicar estilos al componente Loader.

const Loader = () => {
    // Define el componente funcional Loader.
    return (
       <span className="loader"></span> // Devuelve un elemento <span> con la clase 'loader'.
       // Esta clase esta definida en el archivo Loader.css para aplicar los estilos de la animación de carga.
    );
}

export default Loader; // Exporta el componente Loader para que pueda ser utilizado en otras partes de la aplicación.

