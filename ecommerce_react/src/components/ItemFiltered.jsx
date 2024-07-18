import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemFiltered = ({ products }) => {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const filtered = products.filter(p => p.category === categoryId);
            setFilteredProducts(filtered);
        }
    }, [categoryId, products]);

    if (filteredProducts.length === 0) {
        return <div>Cargando productos...</div>;
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
                        description={product.description}
                        category={product.category}
                    />
                ))
            }
        </div>
    );
}

export default ItemFiltered;
