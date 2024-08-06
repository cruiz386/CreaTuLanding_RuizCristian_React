![Logo](./src/assets/logo/logo_fdo_bco-readme.png)

# Ecommerce React App

## Descripción

Este proyecto es una aplicación de comercio electrónico construida con React y Firebase. Los usuarios pueden navegar por el catálogo de productos, agregar productos al carrito de compras, y realizar compras. Al finalizar una compra, se genera una orden que se almacena en Firestore, y se actualiza el stock de los productos comprados. Los datos de los productos son ilustrativos y a modo de ejemplo.

## Características

- Navegación por categorías de productos.
- Agregar y eliminar productos del carrito de compras.
- Actualización dinámica del total de productos y precio en el carrito.
- Finalización de compra con confirmación de detalles de compra y formulario de contacto.
- Almacenamiento de la orden en Firestore.
- Actualización del stock de productos en Firestore.
- Redirección a una página de agradecimiento con detalles de la orden de compra.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Firebase**: Plataforma de desarrollo de aplicaciones que incluye Firestore (base de datos) y Firebase Authentication.
- **React Router**: Biblioteca de navegación para React.
- **SweetAlert2**: Biblioteca para mostrar alertas bonitas y personalizables.
- **Vite**: Herramienta de desarrollo rápida y ligera para proyectos de frontend.

## Instalación


1. Clona este repositorio:

   ```sh
   git clone https://github.com/cruiz386/CreaTuLanding_RuizCristian_React.git

2. Navega al directorio del proyecto:
- cd ecommerce_react


3. Crea un archivo .env en la raíz del proyecto con tus configuraciones de Firebase:
- VITE_FIREBASE_API_KEY=your_api_key
- VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
- VITE_FIREBASE_PROJECT_ID=your_project_id
- VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
- VITE_FIREBASE_APP_ID=your_app_id
 
**Estas son las variables de entorno del proyecto**
- VITE_FIREBASE_API_KEY=AIzaSyBCcNcwx1yA0FzKuigJ7vkUWE7Rt-atrsE
- VITE_FIREBASE_AUTH_DOMAIN=coderhouse-ecommerce-54429.firebaseapp.com
- VITE_FIREBASE_PROJECT_ID=coderhouse-ecommerce-54429
- VITE_FIREBASE_STORAGE_BUCKET=coderhouse-ecommerce-54429.appspot.com
- VITE_FIREBASE_MESSAGING_SENDER_ID=287261797726
- VITE_FIREBASE_APP_ID=1:287261797726:web:ab1bbb4ca3a5f207b973cf

4. Instala las dependencias:
npm install

5. Inicia la aplicación en modo de desarrollo:
npm run dev


## Estructura del Proyecto

- src/: Carpeta principal del código fuente.
- components/: Componentes reutilizables.
- context/: Archivos relacionados con el contexto de la aplicación.
- firebase.js: Configuración de Firebase.
- App.js: Componente principal de la aplicación.
- index.js: Punto de entrada de la aplicación.


## Contribución
Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
4. Haz push a la rama (git push origin feature/nueva-funcionalidad).
5. Crea un nuevo Pull Request.