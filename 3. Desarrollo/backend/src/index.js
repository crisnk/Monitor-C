import express, { json }from "express";
import { HOST, PORT } from "./config/configEnv.js";
import connectDB from "./config/configDB.js";
import indexRoutes from "./routes/index.routes.js";
import morgan from "morgan";
import cors from 'cors';

async function setupServer() {
    try {
        const app = express();

        app.use(cors({ credentials: true, origin: true })); // Para permitir solicitudes al backend desde el frontend
        app.use(morgan('dev')); // Para mostrar por consola las peticiones
        app.use(json()); // Para aceptar el body en formato json de las solicitudes/peticiones
        app.use('/api', indexRoutes);

        app.listen(PORT, () => {
            console.log(`=> Servidor corriendo en http://${HOST}:${PORT}/api`);
        })
    } catch (error) {
        console.error('Error en index.js -> setupServer():', error);
    }
}

async function setupAPI() {
    try {
        process.stdout.write("\x1Bc"); // Limpia la consola cada vez que se actualiza el codigo
        await connectDB();
        await setupServer();
    } catch (error) {
        console.error('Error en index.js -> setupAPI():', error);
    }
}

setupAPI()
    .then(() => console.log('=> API iniciada exitosamente'))
    .catch((error) => console.error('Error en index.js -> setupAPI():', error));