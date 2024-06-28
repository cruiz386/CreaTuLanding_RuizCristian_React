import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
    return (
        <div>
           
            <ItemListContainer message="Bienvenidos a nuestra tienda CaSa Smart!" />
            <Footer />
        </div>
    );
};

export default App;
