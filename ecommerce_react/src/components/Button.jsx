import React from 'react';

// Componente funcional `Button` que recibe dos props: `onClick` y `textButton`.
const Button = ({ onClick, textButton }) => {
  return (
    // Renderiza un botón con clases de Bootstrap y un margen de 3 (m-3).
    // Al hacer clic en el botón, se ejecuta la función `onClick` pasada como prop.
    // El texto del botón es proporcionado por la prop `textButton`.
    <button onClick={onClick} className="btn btn-outline-secondary m-3">
      {textButton}  
    </button>
  );
};

export default Button;  // Exporta el componente `Button` para que pueda ser utilizado en otros archivos.

