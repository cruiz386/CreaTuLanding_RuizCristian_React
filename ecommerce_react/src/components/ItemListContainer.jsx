import React from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { useAppContext } from './Context';
import './Loader.css';

const ItemListContainer = () => {

    const { products } = useAppContext();

    return (
        <>
            {
                products.length === 0 ?
                    <div className="loader-container">

                        <Loader />
                        <img
                            src="https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/img-tienda-online.webp"
                            className="card-img-top m-2 "
                            alt="tienda"
                            style={{ width: '15rem', height: '200px', maxWidth: '200px', maxHeight: '250px', alignSelf: 'center' }}
                        />
                        <p className="loading-text">Cargando productos disponibles...</p>
                    </div>
                    :
                    <ItemList products={products} />
            }
        </>
    );
};

export default ItemListContainer;
