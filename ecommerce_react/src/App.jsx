import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa los componentes necesarios para el enrutamiento con React Router.
import NavBar from './components/NavBar'; // Importa el componente de la barra de navegación.
import Footer from './components/Footer'; // Importa el componente del pie de página.
import ItemListContainer from './components/ItemListContainer'; // Importa el componente que muestra la lista de ítems.
import ItemDetail from './components/ItemDetail'; // Importa el componente que muestra los detalles de un ítem.
import ItemListFiltered from './components/ItemListFiltered'; // Importa el componente que muestra la lista de ítems filtrados por categoría.
import NotFound from './components/NotFound'; // Importa el componente que muestra una página de error 404 cuando la ruta no coincide.
import Cart from './components/Cart'; // Importa el componente que muestra el carrito de compras.
import FinishPurchase from './components/FinishPurchase'; // Importa el componente que muestra la página de finalización de compra.
import './App.css'; // Importa el archivo CSS para estilos globales de la aplicación.
import { ToastContainer } from 'react-toastify'; // Importa el contenedor de notificaciones para mostrar mensajes emergentes.
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos para las notificaciones de react-toastify.

const App = () => {
    return (
        <div className="page-gradient">
            {/* Contenedor principal con fondo degradado */}
            <BrowserRouter>
                {/* Configura el enrutamiento utilizando BrowserRouter */}
                <NavBar />
                {/* Muestra la barra de navegación en todas las páginas */}
                <main className="content app-container">
                    {/* Contenedor principal del contenido de la aplicación */}
                    <Routes>
                        {/* Configura las rutas de la aplicación */}
                        <Route path="/CreaTuLanding_RuizCristian/" element={<ItemListContainer />} />
                        {/* Ruta para la página principal con la lista de ítems */}
                        <Route path="/CreaTuLanding_RuizCristian/category/:categoryId" element={<ItemListFiltered />} />
                        {/* Ruta para la página de ítems filtrados por categoría */}
                        <Route path="/CreaTuLanding_RuizCristian/item/:itemId" element={<ItemDetail />} />
                        {/* Ruta para la página de detalles de un ítem */}
                        <Route path="/CreaTuLanding_RuizCristian/cart" element={<Cart />} />
                        {/* Ruta para la página del carrito de compras */}
                        <Route path="/CreaTuLanding_RuizCristian/finishPurchase" element={<FinishPurchase />} />
                        {/* Ruta para la página de finalización de compra */}
                        <Route path="/CreaTuLanding_RuizCristian/*" element={<NotFound />} />
                        {/* Ruta para manejar todas las rutas no encontradas (página 404) */}
                    </Routes>
                </main>
                <Footer />
                {/* Muestra el pie de página en todas las páginas */}
                <ToastContainer />
                {/* Muestra el contenedor de notificaciones de react-toastify */}
            </BrowserRouter>
        </div>
    );
};

export default App; // Exporta el componente App para que pueda ser utilizado en el punto de entrada de la aplicación.


