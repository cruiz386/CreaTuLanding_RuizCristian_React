import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap para usar sus componentes y estilos.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el archivo JavaScript de Bootstrap que incluye el soporte para los componentes interactivos (como modales y desplegables).
import React from 'react'; // Importa React para crear componentes y usar JSX.
import { createRoot } from 'react-dom/client'; // Importa el método `createRoot` de `react-dom/client` para renderizar la aplicación en React 18.
import App from './App'; // Importa el componente principal de la aplicación.
import './index.css'; // Importa los estilos CSS globales específicos para el archivo `index.css`.
import { ContextProvider } from './components/Context'; // Importa el proveedor del contexto para manejar el estado global en la aplicación.

const container = document.getElementById('root'); // Obtiene el contenedor HTML con el id 'root' donde se renderizará la aplicación.
const root = createRoot(container); // Crea la raíz del árbol de renderizado usando `createRoot`.

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
// Renderiza el componente `App` dentro del `ContextProvider` para proporcionar el contexto global a toda la aplicación.
