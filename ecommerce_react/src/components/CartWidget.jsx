import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartCount }) => {
    return (
        <div style={{ color: 'white', fontSize: '1.5rem', position: 'relative', display: 'inline-block' }} className="mb-4">
            <FaShoppingCart />
            <span style={{ position: 'absolute', top: '0px', right: '-50px', borderRadius: '50%', padding: '5px', color: 'white' }}>
                {cartCount}
            </span>
        </div>
    );
};

export default CartWidget;