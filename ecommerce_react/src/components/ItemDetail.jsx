import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Button from './Button';
import { useAppContext } from './Context';
import { toast } from 'react-toastify';
import './ItemDetail.css';

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
                if (foundProduct.stock === 0) {
                    toast.error('No quedan más productos en stock', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        style: {
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '16px',
                            color: '#fff',
                            backgroundColor: '#ff4d4d'
                        }
                    });
                }
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
        if (product.stock > 0 && quantity <= product.stock) {
            addToCart(product, quantity);
            setQuantity(1);  
            toast.success(`${quantity} ${product.name}(s) agregado(s) al carrito`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#4caf50'
                }
            });
        } else {
            toast.error('Cantidad no válida', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#ff4d4d'
                }
            });
        }
    };

    const imageUrl = product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`;

    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <div className="item-detail-image-container">
                    <img
                        src={imageUrl}
                        alt={product.name}
                        className="item-detail-image"
                    />
                </div>
                <div className="item-detail-body">
                    <h5 className="item-detail-title">{product.name}</h5>
                    <p className="item-detail-text">Categoría: {product.category}</p>
                    <p className="item-detail-text">{product.description}</p>
                    <p className="item-detail-text">Precio: ${product.price}</p>
                    <p className="item-detail-text">Stock disponible: {product.stock}</p>
                    <ItemCount
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        stock={product.stock}
                    />
                    <div className="item-detail-buttons">
                        <Button 
                            textButton="Agregar al carrito" 
                            onClick={handleAddToCart} 
                            disabled={product.stock === 0} 
                        />
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

