import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Biblioteca para mostrar alertas estilizadas
import Button from './Button'; // Componente de botón reutilizable
import { useAppContext } from './Context'; // Hook para usar el contexto de la aplicación
import { addDoc, collection } from 'firebase/firestore'; // Métodos de Firebase para manejar la base de datos
import { db } from './firebase'; // Configuración de Firebase
import './Cart.css'; // Estilos para el componente

const Cart = () => {
    // Desestructura los valores del contexto de la aplicación
    const { cart, removeFromCart, clearCart, cartCount, updateProductStock } = useAppContext();
    const navigate = useNavigate(); // Hook para la navegación

    // Hook useEffect que redirige al usuario si el carrito está vacío
    useEffect(() => {
        if (!cart || cart.length === 0) {
            Swal.fire({
                title: "Carrito vacío",
                text: "El carrito está vacío. Redirigiendo...",
                icon: "info",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                navigate('/CreaTuLanding_RuizCristian/'); // Redirige a la página principal
            });
        }
    }, [cart, navigate]);

    // Maneja la eliminación de productos del carrito
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId); // Llama a la función del contexto para eliminar el producto
    };

    // Maneja el proceso de finalizar la compra
    const handleFinishPurchase = async () => {
        // Calcula el total de la compra
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        // Verifica si hay suficiente stock para todos los productos en el carrito
        for (let item of cart) {
            if (item.stock < item.quantity) {
                Swal.fire('Error', `No hay suficiente stock para el producto: ${item.name}`, 'error');
                return; // Sale de la función si no hay suficiente stock
            }
        }

        // Muestra una alerta de confirmación de compra
        const { isConfirmed } = await Swal.fire({
            title: 'Confirmar Compra',
            html: 
                `<p><strong>Detalles de la Compra:</strong></p>
                ${cart.map(item => 
                    `<p>${item.name} - ${item.quantity} x $${item.price}</p>`
                ).join('')}
                <hr>
                <p><strong>Total a pagar:</strong> $${total}</p>`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        });

        if (isConfirmed) {
            // Muestra una alerta para ingresar la información de contacto
            const { value: userInfo } = await Swal.fire({
                title: 'Información de Contacto',
                html: 
                    `<input id="name" class="swal2-input" placeholder="Nombre">
                    <input id="surname" class="swal2-input" placeholder="Apellido">
                    <input id="phone" class="swal2-input" placeholder="Teléfono">
                    <input id="email" class="swal2-input" placeholder="Email" type="email">`,
                confirmButtonText: 'Enviar',
                focusConfirm: false,
                preConfirm: () => {
                    // Valida la información de contacto
                    const name = Swal.getPopup().querySelector('#name').value;
                    const surname = Swal.getPopup().querySelector('#surname').value;
                    const phone = Swal.getPopup().querySelector('#phone').value;
                    const email = Swal.getPopup().querySelector('#email').value;
                    if (!name || !surname || !phone || !email) {
                        Swal.showValidationMessage('Por favor complete todos los campos');
                        return false;
                    }
                    return { name, surname, phone, email };
                }
            });

            if (userInfo) {
                const order = {
                    buyer: userInfo,
                    items: cart,
                    total
                };

                try {
                    // Crea una nueva orden en Firestore
                    const docRef = await addDoc(collection(db, "orders"), order);
                    Swal.fire('Compra realizada', `Tu orden ha sido generada con ID: ${docRef.id}`, 'success');

                    // Actualiza el stock de los productos en Firestore
                    for (let item of cart) {
                        await updateProductStock(item.id, -item.quantity);
                    }

                    clearCart(); // Vacía el carrito
                    navigate('/CreaTuLanding_RuizCristian/finishPurchase', { state: { orderId: docRef.id, order } }); // Redirige a la página de finalización de compra
                } catch (error) {
                    console.error("Error al generar la orden de compra:", error);
                    Swal.fire('Error', `Hubo un problema al procesar tu compra: ${error.message}`, 'error');
                }
            }
        }
    };

    // Si el carrito está vacío, no muestra nada
    if (!cart || cart.length === 0) {
        return null;
    }

    return (
        <div className="cart-container">
            <h2 className="content">Carrito de Compras</h2>
            <div className="cart-grid content">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h3 className="cart-item-title">{item.name}</h3>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                        <Button textButton="Eliminar producto" onClick={() => handleRemoveFromCart(item.id)} />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between flex-column align-items-center mt-4">
                <p>Total de productos: {cartCount}</p>
                <Button textButton="Finalizar Compra" onClick={handleFinishPurchase} />
            </div>
        </div>
    );
};

export default Cart;
