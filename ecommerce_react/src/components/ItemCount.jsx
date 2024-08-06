import React from 'react';
import Button from './Button';

const ItemCount = ({ quantity, incrementQuantity, decrementQuantity, stock }) => {
    return (
        <div className="d-flex align-items-center justify-content-center mb-4">
            <Button onClick={decrementQuantity} textButton="-" disabled={quantity <= 1} />
            <span>{quantity}</span>
            <Button onClick={incrementQuantity} textButton="+" disabled={quantity >= stock} />
        </div>
    );
};

export default ItemCount;
