import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemListFiltered from './components/ItemListFiltered';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import fetchData from './fetchData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FinishPurchase from './components/FinishPurchase';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData()
            .then(response => {
                setProducts(response);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="app-container">
            <BrowserRouter>
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route path="/CreaTuLanding_RuizCristian/" element={<ItemListContainer products={products} />} />
                        <Route path="/CreaTuLanding_RuizCristian/category/:categoryId" element={<ItemListFiltered products={products} />} />
                        <Route path="/CreaTuLanding_RuizCristian/item/:itemId" element={<ItemDetail products={products} />} />
                        <Route path="/CreaTuLanding_RuizCristian/cart" element={<Cart />} />
                        <Route path="/CreaTuLanding_RuizCristian/finishPurchase" element={<FinishPurchase />} />

                        <Route path="/CreaTuLanding_RuizCristian/*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
