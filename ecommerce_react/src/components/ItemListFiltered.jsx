import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios para el manejo del estado y efectos secundarios.
import { useParams } from 'react-router-dom'; // Importa el hook useParams para obtener parámetros de la URL.
import Item from './Item'; // Importa el componente Item para mostrar los productos.
import Loader from './Loader'; // Importa el componente Loader para mostrar una animación de carga.
import { useAppContext } from './Context'; // Importa el hook useAppContext para acceder al contexto de la aplicación.

const ItemFiltered = () => {
    // Obtiene la lista de productos desde el contexto de la aplicación.
    const { products } = useAppContext();
    // Obtiene el ID de la categoría desde los parámetros de la URL.
    const { categoryId } = useParams();
    // Estado local para almacenar los productos filtrados.
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Efecto secundario que se ejecuta cuando categoryId o products cambian.
        if (products.length > 0) {
            // Filtra los productos por la categoría obtenida de la URL.
            const filtered = products.filter(p => p.category === categoryId);
            
            // Ordena los productos filtrados:
            // Los productos sin stock (stock === 0) se colocan al final.
            const sortedFiltered = filtered.slice().sort((a, b) => {
                if (a.stock === 0 && b.stock > 0) return 1;
                if (a.stock > 0 && b.stock === 0) return -1;
                return 0; // Los productos con stock se mantienen en el mismo orden relativo.
            });

            // Actualiza el estado con los productos filtrados y ordenados.
            setFilteredProducts(sortedFiltered);
        }
    }, [categoryId, products]); // Dependencias del efecto: se vuelve a ejecutar si categoryId o products cambian.

    // Si no hay productos filtrados, muestra un loader y un mensaje de carga.
    if (filteredProducts.length === 0) {
        return (
            <div>
                <Loader /> {/* Muestra una animación de carga mientras los productos están siendo filtrados. */}
                <p>Cargando productos disponibles...</p> {/* Mensaje que indica que los productos están cargando. */}
            </div>
        );
    }

    // Si hay productos filtrados, muestra la lista de productos.
    return (
        <div className="row justify-content-center">
            {filteredProducts.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    description={product.description}
                    category={product.category}
                />
            ))}
        </div>
    );
}

export default ItemFiltered; // Exporta el componente ItemFiltered para que pueda ser utilizado en otras partes de la aplicación.


