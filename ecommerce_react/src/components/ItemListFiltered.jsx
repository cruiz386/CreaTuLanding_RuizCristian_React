import React from 'react';
import ItemFiltered from './ItemFiltered';
import Loader from './Loader';
import { useAppContext } from './Context';

const ItemListFiltered = () => {

    const { products } = useAppContext();

    return (
        <>
            {
                products.length === 0 ?
                <div><Loader />
                <p> Cargando productos de categoria seleccionada...</p></div>
                    :
                    <ItemFiltered products={products} />
            }
        </>
    );
}

export default ItemListFiltered;
