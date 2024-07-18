import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({ products }) => {
    return (
        <>
            {
                products.length === 0 ?
                    <p>Cargando productos disponibles...</p>
                    :
                    <ItemList products={products} />
            }
        </>
    );
};

export default ItemListContainer;
