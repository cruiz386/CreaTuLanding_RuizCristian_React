import React from 'react';
import Item from './Item';
import { useAppContext } from './Context';

const ItemList = () => {

    const { products, addToCart } = useAppContext();

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
