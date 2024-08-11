import React from 'react'; // Importa React para poder usar JSX y componentes.
import ItemList from './ItemList'; // Importa el componente ItemList para mostrar la lista de productos.
import Loader from './Loader'; // Importa el componente Loader para mostrar una animación de carga.
import { useAppContext } from './Context'; // Importa el hook personalizado useAppContext para acceder al contexto de la aplicación.
import './Loader.css'; // Importa el archivo CSS para el componente Loader.

const ItemListContainer = () => {
    // Obtiene la lista de productos desde el contexto de la aplicación.
    const { products } = useAppContext();
    // Define la URL de la imagen que se mostrará mientras se cargan los productos.
    const imageUrl = "https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/img-tienda-online.jpg"; 
    
    return (
        <>
            {
                // Verifica si la lista de productos está vacía.
                products.length === 0 ?
                    // Si la lista de productos está vacía, muestra el componente Loader y una imagen de carga.
                    <div className="loader-container">
                        <Loader /> {/* Muestra el componente Loader, que probablemente es una animación de carga. */}
                        <img
                            src={imageUrl} // Usa la URL de la imagen proporcionada para mostrar una imagen relacionada con la tienda.
                            className="card-img-top m-2" // Aplica clases de Bootstrap y estilos adicionales a la imagen.
                            alt="tienda" // Proporciona un texto alternativo para la imagen.
                            style={{ width: '15rem', height: '200px', maxWidth: '200px', maxHeight: '250px', alignSelf: 'center' }} // Estilos en línea para ajustar el tamaño de la imagen.
                        />
                        <p className="loading-text">Cargando productos disponibles...</p> {/* Muestra un texto que indica que los productos están cargando. */}
                    </div>
                    :
                    // Si la lista de productos no está vacía, muestra el componente ItemList con los productos.
                    <ItemList products={products} />
            }
        </>
    );
};

export default ItemListContainer; // Exporta el componente ItemListContainer para su uso en otras partes de la aplicación.
