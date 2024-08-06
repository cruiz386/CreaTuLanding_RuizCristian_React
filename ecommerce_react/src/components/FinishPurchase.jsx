import React from 'react';
import { useLocation } from 'react-router-dom';
import './FinishPurchase.css';

const FinishPurchase = () => {
    const location = useLocation();
    const { orderId, order } = location.state;

    if (!order) {
        return (
            <div className="finish-purchase-container">
                <h1>Gracias por su compra!</h1>
                <p>Estamos procesando su orden...</p>
            </div>
        );
    }

    const { buyer, items, total } = order;

    return (
        <div className="finish-purchase-container">
            <h1 className="finish-purchase">¡Gracias por su compra!</h1>
            <p>Su orden ha sido generada con éxito. Aquí están los detalles de su compra:</p>
            <div className="order-details">
                <h2>Información del Comprador</h2>
                <p><strong>Nombre:</strong> {buyer.name}</p>
                <p><strong>Apellido:</strong> {buyer.surname}</p>
                <p><strong>Teléfono:</strong> {buyer.phone}</p>
                <p><strong>Email:</strong> {buyer.email}</p>
                <h2>Detalles de los Productos</h2>
                {items.map((item, index) => (
                    <div key={index} className="order-item">
                        <p><strong>Producto:</strong> {item.name}</p>
                        <p><strong>Cantidad:</strong> {item.quantity}</p>
                        <p><strong>Precio:</strong> ${item.price}</p>
                    </div>
                ))}
                <h2>Total a Pagar</h2>
                <p><strong>${total}</strong></p>
                <h2>Número de Orden</h2>
                <p><strong>{orderId}</strong></p>
            </div>
        </div>
    );
};

export default FinishPurchase;

