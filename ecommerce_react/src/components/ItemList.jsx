import React from 'react';
import Item from './Item';

const ItemList = ({ products, addToCart }) => {
    return (
        <div className="row">
            {
                products.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
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
