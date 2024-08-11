import React from 'react'; // Importa la librería React para utilizar JSX y crear componentes.
import Button from './Button'; // Importa un componente personalizado llamado Button desde un archivo local.

const ItemCount = ({ quantity, incrementQuantity, decrementQuantity, stock }) => {
    // El componente ItemCount se encarga de mostrar los controles para aumentar y disminuir la cantidad de un producto.

    return (
        <div className="d-flex align-items-center justify-content-center mb-4">
            {/* Botón para disminuir la cantidad. Está deshabilitado si la cantidad es menor o igual a 1 */}
            <Button onClick={decrementQuantity} textButton="-" disabled={quantity <= 1} />
            
            {/* Muestra la cantidad actual */}
            <span>{quantity}</span>
            
            {/* Botón para aumentar la cantidad. Está deshabilitado si la cantidad es igual o mayor al stock disponible */}
            <Button onClick={incrementQuantity} textButton="+" disabled={quantity >= stock} />
        </div>
    );
};

export default ItemCount; // Exporta el componente ItemCount para que pueda ser utilizado en otras partes de la aplicación.
