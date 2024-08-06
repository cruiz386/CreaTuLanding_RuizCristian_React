import React from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { useAppContext } from './Context';

const ItemListContainer = () => {

    const { products } = useAppContext();

    return (
        <>
            {
                products.length === 0 ?
                <div><Loader />
                <p> Cargando productos disponibles...</p></div>                    
                    :
                    <ItemList products={products} />
            }
        </>
    );
};

export default ItemListContainer;
