
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCart(parsedCart);
            updateCartCount(parsedCart);
        }
    }, []);

    const updateCartCount = (cartItems) => {
        const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalCount);
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updateCartCount(updatedCart);
    };

    const handleFinishPurchase = () => {
        setCart([]);
        localStorage.removeItem('cart');
        setCartCount(0);
        window.dispatchEvent(new Event('storage'));
    };

    if (cart.length === 0) {
        return (<div><h1>El carrito está vacío</h1></div>);
    }

    return (
        <div className="cart-container">
            <h2 className="content">Carrito de Compras</h2>
            <div className="cart-grid content">

                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h3 className="cart-item-title">{item.name}</h3>

                        <img
                            className="cart-item-image"
                            src={item.image}
                            alt={item.name} />

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


                <Link to="/CreaTuLanding_RuizCristian/finishPurchase">
                    <Button textButton="Finalizar Compra" onClick={handleFinishPurchase} />
                </Link>

            </div>
        </div>
    );
};

export default Cart;
