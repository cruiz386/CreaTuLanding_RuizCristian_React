import React from 'react';
import { useLocation } from 'react-router-dom'; // Se importa useLocation para acceder al estado de la ubicación actual.
import './FinishPurchase.css'; // Se importa el archivo CSS específico para los estilos del componente.

const FinishPurchase = () => {
    const location = useLocation(); // Se obtiene la ubicación actual, que contiene el estado pasado a través del router.
    const { orderId, order } = location.state; // Se extraen el ID de la orden y los detalles de la orden desde el estado.

    // Si la orden no existe (por ejemplo, si no se ha pasado correctamente), se muestra un mensaje de procesamiento.
    if (!order) {
        return (
            <div className="finish-purchase-container">
                <h1>Gracias por su compra!</h1>
                <p>Estamos procesando su orden...</p>
            </div>
        );
    }

    // Si la orden existe, se desestructura para obtener la información del comprador, los ítems, y el total.
    const { buyer, items, total } = order;

    return (
        <div className="finish-purchase-container">
            <h1 className="finish-purchase">¡Gracias por su compra!</h1>
            <p>Su orden ha sido generada con éxito. Aquí están los detalles de su compra:</p>
            <div className="order-details">
                <h2>Información del Comprador</h2>
                {/* Se muestra la información del comprador, incluyendo nombre, apellido, teléfono y email. */}
                <p><strong>Nombre:</strong> {buyer.name}</p>
                <p><strong>Apellido:</strong> {buyer.surname}</p>
                <p><strong>Teléfono:</strong> {buyer.phone}</p>
                <p><strong>Email:</strong> {buyer.email}</p>
                
                <h2>Detalles de los Productos</h2>
                {/* Se recorre el array de ítems y se muestra la información de cada producto comprado. */}
                {items.map((item, index) => (
                    <div key={index} className="order-item">
                        <p><strong>Producto:</strong> {item.name}</p>
                        <p><strong>Cantidad:</strong> {item.quantity}</p>
                        <p><strong>Precio:</strong> ${item.price}</p>
                    </div>
                ))}
                
                <h2>Total a Pagar</h2>
                {/* Se muestra el total a pagar por la compra. */}
                <p><strong>${total}</strong></p>
                
                <h2>Número de Orden</h2>
                {/* Se muestra el ID de la orden generada. */}
                <p><strong>{orderId}</strong></p>
            </div>
        </div>
    );
};

export default FinishPurchase;
