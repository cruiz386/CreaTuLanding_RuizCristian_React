import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppContext } from './Context'; 

// Definición del componente funcional `CartWidget`.
const CartWidget = () => {
    // Utiliza el context de la aplicación para obtener el estado `cartCount`, que contiene la cantidad de productos en el carrito.
    const { cartCount } = useAppContext();

    // Renderiza un icono de carrito de compras con el conteo de productos en el carrito.
    return (
        <div 
            style={{
                color: 'white', // El color del texto del icono es blanco.
                fontSize: '1.5rem', // Tamaño de la fuente del icono.
                position: 'relative', // Posicionamiento relativo para permitir la colocación del conteo del carrito.
                display: 'inline-block' // Hace que el contenedor ocupe solo el espacio necesario.
            }} 
            className="mb-4" // Clase CSS para agregar un margen inferior.
        >
            <FaShoppingCart /> 
            {/* Icono del carrito de compras utilizando la librería `react-icons` */}
            <span 
                style={{
                    position: 'absolute', // Posiciona el conteo del carrito en relación con el icono.
                    top: '0px', // Alinea el conteo en la parte superior del icono.
                    right: '-50px', // Coloca el conteo a la derecha del icono.
                    borderRadius: '50%', // Hace que el fondo del conteo sea circular.
                    padding: '5px', // Añade un pequeño padding al conteo para darle algo de espacio interno.
                    color: 'white' // Color del texto del conteo.
                }}
            >
                {cartCount}
                {/* Muestra el número de productos en el carrito, obtenido del contexto */}
            </span>
        </div>
    );
};

export default CartWidget;

