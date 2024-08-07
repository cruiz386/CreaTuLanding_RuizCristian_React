import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from './firebase'; 

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items"));
                const productsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    stock: Number(doc.data().stock) 
                }));
                setProducts(productsList);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        updateCartCount(cart);
    }, [cart]);

    const updateCartCount = (cartItems) => {
        const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalCount);
    };

    const addToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        let updatedCart;

        if (existingProductIndex >= 0) {
            updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
        } else {
            updatedCart = [...cart, { ...product, quantity }];
        }

        setCart(updatedCart);
        updateProductStock(product.id, -quantity); 
    };

    const removeFromCart = (productId) => {
        const productToRemove = cart.find(item => item.id === productId);
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        if (productToRemove) {
            updateProductStock(productId, productToRemove.quantity); 
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateProductStock = async (productId, quantityChange) => {
        try {
            const productRef = doc(db, "items", productId);
            const productToUpdate = products.find(product => product.id === productId);
            if (productToUpdate) {
                await updateDoc(productRef, {
                    stock: Number(productToUpdate.stock) + quantityChange 
                });
                setProducts(prevProducts =>
                    prevProducts.map(product =>
                        product.id === productId
                            ? { ...product, stock: Number(product.stock) + quantityChange }
                            : product
                    )
                );
            }
        } catch (error) {
            console.error("Error al actualizar el stock:", error);
        }
    };

    return (
        <AppContext.Provider value={{ products, cart, cartCount, addToCart, removeFromCart, clearCart, updateProductStock }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
