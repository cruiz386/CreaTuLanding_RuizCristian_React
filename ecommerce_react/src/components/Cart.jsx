import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from './Button';
import { useAppContext } from './Context';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, clearCart, cartCount, updateProductStock } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!cart || cart.length === 0) {
            Swal.fire({
                title: "Carrito vacío",
                text: "El carrito está vacío. Redirigiendo...",
                icon: "info",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                navigate('/CreaTuLanding_RuizCristian/');  
            });
        }
    }, [cart, navigate]);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleFinishPurchase = async () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        
        for (let item of cart) {
            if (item.stock < item.quantity) {
                Swal.fire('Error', `No hay suficiente stock para el producto: ${item.name}`, 'error');
                return; 
            }
        }

        const { isConfirmed } = await Swal.fire({
            title: 'Confirmar Compra',
            html: `
                <p><strong>Detalles de la Compra:</strong></p>
                ${cart.map(item => `
                    <p>${item.name} - ${item.quantity} x $${item.price}</p>
                `).join('')}
                <hr>
                <p><strong>Total a pagar:</strong> $${total}</p>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        });

        if (isConfirmed) {
            const { value: userInfo } = await Swal.fire({
                title: 'Información de Contacto',
                html: `
                    <input id="name" class="swal2-input" placeholder="Nombre">
                    <input id="surname" class="swal2-input" placeholder="Apellido">
                    <input id="phone" class="swal2-input" placeholder="Teléfono">
                    <input id="email" class="swal2-input" placeholder="Email" type="email">
                `,
                confirmButtonText: 'Enviar',
                focusConfirm: false,
                preConfirm: () => {
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
                    const docRef = await addDoc(collection(db, "orders"), order);
                    Swal.fire('Compra realizada', `Tu orden ha sido generada con ID: ${docRef.id}`, 'success');

                    
                    for (let item of cart) {
                        await updateProductStock(item.id, -item.quantity);
                    }

                    clearCart();
                    navigate('/CreaTuLanding_RuizCristian/finishPurchase', { state: { orderId: docRef.id, order } });
                } catch (error) {
                    console.error("Error al generar la orden de compra:", error);
                    Swal.fire('Error', `Hubo un problema al procesar tu compra: ${error.message}`, 'error');
                }
            }
        }
    };

    if (!cart || cart.length === 0) {
        return null;  
    }

    return (
        <div className="cart-container ">
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
