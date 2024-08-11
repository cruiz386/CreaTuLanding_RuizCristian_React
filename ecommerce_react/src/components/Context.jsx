import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from './firebase';

// Se crea un contexto para compartir el estado global de la aplicación.
const AppContext = createContext();

// Proveedor de contexto que envuelve a la aplicación y proporciona los estados y funciones a los componentes hijos.
export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // Hook para obtener los productos de la base de datos al montar el componente.
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items"));
                const productsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    stock: Number(doc.data().stock) // Asegura que el stock sea un número.
                }));
                setProducts(productsList);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, []);

    // Hook para actualizar el contador de productos en el carrito cada vez que cambia el carrito.
    useEffect(() => {
        updateCartCount(cart);
    }, [cart]);

    // Función para actualizar el contador total de productos en el carrito.
    const updateCartCount = (cartItems) => {
        const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalCount);
    };

    // Función para agregar productos al carrito.
    const addToCart = (product, quantity) => {
        // Verifica si hay suficiente stock para agregar al carrito.
        if (product.stock < quantity) {
            console.error(`No hay suficiente stock para ${product.name}`);
            return;
        }

        // Verifica si el producto ya está en el carrito.
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        let updatedCart;

        if (existingProductIndex >= 0) {
            // Actualiza la cantidad si el producto ya está en el carrito.
            updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
        } else {
            // Agrega el producto al carrito si no está presente.
            updatedCart = [...cart, { ...product, quantity }];
        }

        setCart(updatedCart);
        // Eliminamos la actualización del stock aquí para evitar cambios prematuros.
    };

    // Función para eliminar productos del carrito.
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    
    };

    // Función para vaciar el carrito.
    const clearCart = () => {
        setCart([]);
    };

    // Función para actualizar el stock en Firestore.
    const updateProductStock = async (productId, quantityChange) => {
        try {
            const productRef = doc(db, "items", productId);
            const productToUpdate = products.find(product => product.id === productId);
            if (productToUpdate) {
                const newStock = Number(productToUpdate.stock) + quantityChange;

                if (newStock >= 0) {
                    await updateDoc(productRef, { stock: newStock });
                    setProducts(prevProducts =>
                        prevProducts.map(product =>
                            product.id === productId
                                ? { ...product, stock: newStock }
                                : product
                        )
                    );
                } else {
                    console.error(`No se puede actualizar el stock de ${productToUpdate.name} a un valor negativo.`);
                }
            }
        } catch (error) {
            console.error("Error al actualizar el stock:", error);
        }
    };

    // Retorna el proveedor del contexto con valores y funciones necesarias para gestionar el carrito y los productos.
    return (
        <AppContext.Provider value={{ products, cart, cartCount, addToCart, removeFromCart, clearCart, updateProductStock }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook personalizado para usar el contexto en otros componentes.
export const useAppContext = () => {
    return useContext(AppContext);
};
