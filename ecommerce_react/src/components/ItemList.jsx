import React from 'react'; // Importa React para poder usar JSX y componentes.
import Item from './Item'; // Importa el componente Item para mostrar detalles de cada producto.
import { useAppContext } from './Context'; // Importa el hook personalizado useAppContext para acceder al contexto de la aplicación.

const ItemList = () => {
    // Obtiene los productos y la función addToCart desde el contexto de la aplicación.
    const { products, addToCart } = useAppContext();

    // Ordena los productos para que aquellos sin stock aparezcan al final de la lista.
    const sortedProducts = products.slice().sort((a, b) => {
        if (a.stock === 0 && b.stock > 0) return 1; // Coloca los productos sin stock después de los productos con stock.
        if (a.stock > 0 && b.stock === 0) return -1; // Coloca los productos con stock antes de los productos sin stock.
        return 0; // Mantiene el orden original si ambos productos tienen stock o ambos no tienen.
    });

    return (
        <div className="row justify-content-center">
            {
                // Mapea los productos ordenados para renderizar un componente Item para cada uno.
                sortedProducts.map((product) => {
                    return (
                        <Item
                            key={product.id} // Usa el ID del producto como clave única para cada elemento.
                            id={product.id} // Propiedad del ID del producto.
                            image={product.image} // Propiedad de la URL de la imagen del producto.
                            name={product.name} // Propiedad del nombre del producto.
                            price={product.price} // Propiedad del precio del producto.
                            stock={product.stock} // Propiedad del stock disponible del producto.
                            description={product.description} // Propiedad de la descripción del producto.
                            category={product.category} // Propiedad de la categoría del producto.
                            addToCart={addToCart} // Propiedad para añadir el producto al carrito.
                        />
                    )
                })
            }
        </div>
    );
}

export default ItemList; // Exporta el componente ItemList para su uso en otras partes de la aplicación.

