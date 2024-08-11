import React, { useState, useEffect } from 'react'; // Importa React y hooks useState y useEffect para manejar el estado y los efectos secundarios.
import { useParams, Link } from 'react-router-dom'; // Importa useParams para acceder a los parámetros de la URL y Link para la navegación.
import ItemCount from './ItemCount'; // Importa el componente ItemCount para seleccionar la cantidad de productos.
import Button from './Button'; // Importa el componente Button para mostrar botones.
import { useAppContext } from './Context'; // Importa el hook personalizado useAppContext para acceder al contexto de la aplicación.
import { toast } from 'react-toastify'; // Importa la biblioteca de notificaciones react-toastify.
import './ItemDetail.css'; // Importa el archivo de estilos CSS para el componente.

const ItemDetail = () => {
    // Utiliza el contexto para obtener los productos y la función de agregar al carrito.
    const { products, addToCart } = useAppContext();
    // Obtiene el ID del producto desde los parámetros de la URL.
    const { itemId } = useParams();
    // Declara el estado para el producto seleccionado y la cantidad.
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    // URL base para las imágenes del producto.
    const baseUrl = "https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/";

    useEffect(() => {
        // Efecto para buscar el producto correspondiente al ID proporcionado.
        if (products.length > 0) {
            const foundProduct = products.find(p => p.id === itemId);
            if (foundProduct) {
                setProduct(foundProduct);
                // Muestra una notificación si el producto no tiene stock disponible.
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
    }, [itemId, products]); // Dependencias del efecto: itemId y products.

    // Muestra un mensaje de carga mientras se obtiene el producto.
    if (!product) {
        return <div>Cargando producto...</div>;
    }

    // Función para incrementar la cantidad del producto.
    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    // Función para disminuir la cantidad del producto.
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Función para manejar la adición del producto al carrito.
    const handleAddToCart = () => {
        if (product.stock > 0 && quantity <= product.stock) {
            addToCart(product, quantity);
            setQuantity(1);  // Resetea la cantidad a 1 después de agregar al carrito.
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

    // Construye la URL de la imagen del producto, utilizando una URL base si la imagen no es una URL absoluta.
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

export default ItemDetail; // Exporta el componente ItemDetail para su uso en otras partes de la aplicación.
