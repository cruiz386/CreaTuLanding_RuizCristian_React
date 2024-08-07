import React from 'react';
import Item from './Item';
import { useAppContext } from './Context';

const ItemList = () => {
    const { products, addToCart } = useAppContext();

    
    const sortedProducts = products.slice().sort((a, b) => {
        if (a.stock === 0 && b.stock > 0) return 1;
        if (a.stock > 0 && b.stock === 0) return -1;
        return 0; 
    });

    return (
        <div className="row justify-content-center">
            {
                sortedProducts.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            stock={product.stock}
                            description={product.description}
                            category={product.category}
                            addToCart={addToCart}
                        />
                    )
                })
            }
        </div>
    );
}

export default ItemList;

