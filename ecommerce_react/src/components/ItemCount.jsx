 import React from 'react';
 import Button from './Button'; 

 const ItemCount = ({ quantity, incrementQuantity, decrementQuantity }) => {
     return (
         <div className="d-flex align-items-center justify-content-center mb-4">
             <Button onClick={decrementQuantity}textButton="-"/>
             <span>{quantity}</span>
             <Button onClick={incrementQuantity} textButton="+"/>
         </div>
     );
 };

 export default ItemCount;
