import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemListFiltered from './components/ItemListFiltered';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import FinishPurchase from './components/FinishPurchase';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route path="/CreaTuLanding_RuizCristian/" element={<ItemListContainer />} />
                        <Route path="/CreaTuLanding_RuizCristian/category/:categoryId" element={<ItemListFiltered />} />
                        <Route path="/CreaTuLanding_RuizCristian/item/:itemId" element={<ItemDetail />} />
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
