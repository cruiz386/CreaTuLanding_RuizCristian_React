import React from 'react';
import Button from './Button'; // Importa el componente Button
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom para navegación
import './Item.css'; // Importa el archivo CSS para estilos del componente

// Componente Item que muestra información de un producto
const Item = ({ id, image, name, price, description, category, stock }) => {
    // Define la URL de la imagen del producto
    const imageUrl = image;

    // Define el estilo de la tarjeta según el stock del producto
    const cardStyle = stock === 0 ? { opacity: 0.5, pointerEvents: 'none' } : {};
    // Define el estilo del botón según el stock del producto
    const buttonStyle = stock === 0 ? { cursor: 'not-allowed' } : {};

    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-100" style={{ ...cardStyle }}>
                {/* Contenedor de la imagen del producto */}
                <div className="d-flex justify-content-center align-items-center" style={{ height: '30%' }}>
                    <img
                        src={imageUrl}
                        className="card-img-top mt-3"
                        alt={name}
                        style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}
                    />
                </div>
                <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
                    <div style={{ flex: '1', overflowY: 'auto' }}>
                        {/* Información del producto */}
                        <h5 className="card-title" style={{ fontSize: '1.2rem' }}>{name}</h5>
                        <p className="card-text" style={{ fontSize: '0.9rem' }}>Categoría: {category}</p>
                        <p className="card-text" style={{ fontSize: '0.9rem' }}>{description}</p>
                        <p className="card-text" style={{ fontSize: '0.9rem' }}>Precio: ${price}</p>
                        <p className="card-text" style={{ fontSize: '0.9rem' }}>Stock disponible: {stock}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-auto mb-4">
                        {/* Enlace para ver los detalles del producto */}
                        <Link to={`/CreaTuLanding_RuizCristian/item/${id}`}>
                            <Button textButton="Ver detalles" disabled={stock === 0} style={buttonStyle} />
                        </Link>
                    </div>
                </div>
                {/* Mensaje de disponibilidad si el producto está fuera de stock */}
                {stock === 0 && (
                    <div className="card-footer text-center" style={{ color: 'white', backgroundColor: 'red' }}>
                        <small>Producto no disponible</small>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Item; // Exporta el componente Item
