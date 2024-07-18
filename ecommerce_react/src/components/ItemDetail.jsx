import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Button from './Button';

const ItemDetail = ({ products }) => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find(p => p.id === parseInt(itemId));
            setProduct(foundProduct);

        }
    }, [itemId, products]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    const handleAddToCart = () => {
        const storedCart = localStorage.getItem('cart');
        const cart = storedCart ? JSON.parse(storedCart) : [];

        const existingProductIndex = cart.findIndex(p => p.id === product.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
    };

    return (

        <div className="col-lg-4 col-md-6 mb-4 ">
            <div className="card h-100 align-items-center justify-content-center mb-4 ">

                <img
                    src={`.${product.image}`}
                    className="card-img-top m-2"
                    alt={product.name}
                    style={{ width: '15rem', height: '200px', maxWidth: '200px', maxHeight: '250px', alignSelf: 'center' }}
                />

                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Categoria: {product.category}</p>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Precio: ${product.price}</p>

                    <ItemCount
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                    />

                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <Button textButton="Agregar al carrito" onClick={handleAddToCart} />
                        <Link to="/CreaTuLanding_RuizCristian/cart">
                            <Button textButton="Ver Carrito" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;


