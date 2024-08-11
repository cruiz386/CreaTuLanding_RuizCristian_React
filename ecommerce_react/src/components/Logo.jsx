import React from 'react'; // Importa React para poder definir el componente Logo.

const Logo = ({ src, alt, style }) => {
  // Define el componente funcional Logo que acepta props: src, alt, y style.
  return (
    <div>
      {/* Devuelve un contenedor <div> con una imagen <img> dentro. */}
      <img
        src={src}   // Establece la URL de la imagen, proporcionada a través del prop 'src'.
        alt={alt}   // Proporciona un texto alternativo para la imagen, proporcionado a través del prop 'alt'.
        style={style} // Aplica estilos CSS a la imagen, proporcionados a través del prop 'style'.
      />
    </div>
  );
};

export default Logo; // Exporta el componente Logo para que pueda ser importado y utilizado en otras partes de la aplicación.


