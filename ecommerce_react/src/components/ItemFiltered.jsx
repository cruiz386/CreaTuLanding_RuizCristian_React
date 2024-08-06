import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import Loader from './Loader';
import { useAppContext } from './Context';


const ItemFiltered = () => {
    const { products } = useAppContext();
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const filtered = products.filter(p => p.category === categoryId);
            setFilteredProducts(filtered);
        }
    }, [categoryId, products]);

    if (filteredProducts.length === 0) {
        return <div><Loader />
        <p> Cargando productos disponibles...</p></div>;
    }

    return (
        <div className="row">
            {
                filteredProducts.map((product) => (
                    <Item
                        key={product.id}
                        id={product.id}
                        image={`.${product.image}`}
                        name={product.name}
                        price={product.price}
                        stock={product.stock}
                        description={product.description}
                        category={product.category}
                    />
                ))
            }
        </div>
    );
}

export default ItemFiltered;
