import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect para manejar el estado y los efectos secundarios.
import { useParams } from 'react-router-dom'; // Importa useParams para acceder a los parámetros de la URL.
import Item from './Item'; // Importa el componente Item para mostrar detalles de cada producto.
import Loader from './Loader'; // Importa el componente Loader para mostrar un indicador de carga mientras se obtienen los productos.
import { useAppContext } from './Context'; // Importa el hook personalizado useAppContext para acceder al contexto de la aplicación.

const ItemFiltered = () => {
    // Obtiene los productos desde el contexto de la aplicación.
    const { products } = useAppContext();
    // Obtiene el ID de la categoría desde los parámetros de la URL.
    const { categoryId } = useParams();
    // Declara el estado para los productos filtrados.
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Efecto para filtrar y ordenar los productos según la categoría cuando cambian categoryId o products.
        if (products.length > 0) {
            // Filtra los productos que pertenecen a la categoría especificada.
            const filtered = products.filter(p => p.category === categoryId);
            
            // Ordena los productos filtrados: los productos sin stock se muestran al final.
            const sortedFiltered = filtered.slice().sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1; // Coloca los productos sin stock al final.
                if (a.stock > 0 && b.stock === 0) return -1; // Coloca los productos con stock antes de los productos sin stock.
                return 0; // Mantiene el orden original si ambos productos tienen stock o ambos no tienen.
            });
            // Actualiza el estado con los productos filtrados y ordenados.
            setFilteredProducts(sortedFiltered);
        }
    }, [categoryId, products]); // Dependencias del efecto: categoryId y products.

    // Muestra un indicador de carga y mensaje si no hay productos filtrados.
    if (filteredProducts.length === 0) {
        return (
            <div>
                <Loader /> {/* Muestra el componente Loader para indicar que los productos se están cargando. */}
                <p> Cargando productos disponibles...</p> {/* Mensaje de carga. */}
            </div>
        );
    }

    // Renderiza la lista de productos filtrados en una estructura de cuadrícula.
    return (
        <div className="row justify-content-center">
            {
                filteredProducts.map((product) => (
                    <Item
                        key={product.id} // Usa el ID del producto como clave única para cada elemento.
                        id={product.id} // Propiedad del ID del producto.
                        image={product.image} // Propiedad de la URL de la imagen del producto.
                        name={product.name} // Propiedad del nombre del producto.
                        price={product.price} // Propiedad del precio del producto.
                        stock={product.stock} // Propiedad del stock disponible del producto.
                        description={product.description} // Propiedad de la descripción del producto.
                        category={product.category} // Propiedad de la categoría del producto.
                    />
                ))
            }
        </div>
    );
};

export default ItemFiltered; // Exporta el componente ItemFiltered para su uso en otras partes de la aplicación.

