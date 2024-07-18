import React from 'react';
import ItemFiltered from './ItemFiltered';

const ItemListFiltered = ({ products }) => {
    return (
        <>
            {
                products.length === 0 ?
                    <p>Cargando productos de la categoría seleccionada...</p>
                    :
                    <ItemFiltered products={products} />
            }
        </>
    );
}

export default ItemListFiltered;
