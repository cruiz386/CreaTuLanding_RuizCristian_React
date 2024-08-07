import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Button from './Button';
import { useAppContext } from './Context';

const ItemDetail = () => {
    const { products, addToCart } = useAppContext();
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const baseUrl = "https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/";

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find(p => p.id === itemId);
            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
    }, [itemId, products]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (product.stock > 0) {
            addToCart(product, quantity);
            setQuantity(1); 
        }
    };

    // Debugging: Log the final image URL
    const imageUrl = product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`;
    console.log('Image URL:', imageUrl);

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 align-items-center justify-content-center mb-4">
                <img
                    src={imageUrl}
                    className="card-img-top m-2"
                    alt={product.name}
                    style={{ width: '15rem', height: '200px', maxWidth: '200px', maxHeight: '250px', alignSelf: 'center' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Categoria: {product.category}</p>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">Stock disponible: {product.stock}</p>
                    <ItemCount
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        stock={product.stock}
                    />
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <Button textButton="Agregar al carrito" onClick={handleAddToCart} disabled={product.stock === 0} />
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
