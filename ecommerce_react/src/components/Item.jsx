import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name, price, description, category, stock }) => {
    const baseUrl = "https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/";


    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
    
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 align-items-center justify-content-center mb-4">
                <img
                    src={imageUrl}
                    className="card-img-top m-2"
                    alt={name}
                    style={{ width: '15rem', height: '200px', maxWidth: '200px', maxHeight: '250px', alignSelf: 'center' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Categoria: {category}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <Link to={`/CreaTuLanding_RuizCristian/item/${id}`}>
                            <Button textButton="Ver detalles" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;

