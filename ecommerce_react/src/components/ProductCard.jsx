import React, { useState } from 'react';
import Button from './Button';

const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    const handleAddToCart = () => {
        addToCart(quantity);
        setQuantity(1);
    };

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img src={product.image} className="card-img-top m-2" alt={product.name} style={{ width: 'auto', height: 'auto', maxWidth: '300px', alignSelf: 'center' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <Button onClick={decrementQuantity} textButton="-" />
                        <span className="mx-2">{quantity}</span>
                        <Button onClick={incrementQuantity} textButton="+" />
                    </div>
                    <Button onClick={handleAddToCart} textButton="Agregar al carrito" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
