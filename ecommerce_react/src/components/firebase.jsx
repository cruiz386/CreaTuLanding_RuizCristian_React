import { initializeApp } from "firebase/app"; // Se importa la función initializeApp desde el paquete de Firebase para inicializar la app.
import { getFirestore } from "firebase/firestore"; // Se importa la función getFirestore para obtener una instancia de Firestore.

const firebaseConfig = {
    // Se define un objeto de configuración para Firebase, cuyas claves y valores se obtienen de las variables de entorno.
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // La clave de API de Firebase, almacenada en una variable de entorno.
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // El dominio de autenticación de Firebase, almacenado en una variable de entorno.
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // El ID del proyecto de Firebase, almacenado en una variable de entorno.
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // El bucket de almacenamiento de Firebase, almacenado en una variable de entorno.
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // El ID del remitente de mensajería de Firebase, almacenado en una variable de entorno.
    appId: import.meta.env.VITE_FIREBASE_APP_ID // El ID de la aplicación de Firebase, almacenado en una variable de entorno.
};

const app = initializeApp(firebaseConfig); // Se inicializa la aplicación de Firebase con la configuración proporcionada.
const db = getFirestore(app); // Se obtiene una instancia de Firestore a partir de la aplicación inicializada.

export { db }; // Se exporta la instancia de Firestore para que pueda ser utilizada en otras partes de la aplicación.
