import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";

const _filename = fileURLToPath(import.meta.url); // Obtenemos la ruta del archivo actual
const _dirname = path.dirname(_filename); // Obtenemos la ruta del directorio que contiene el archivo actual
const envFilePath = path.resolve(_dirname, '.env'); // Obtenemos la ruta del archivo .env

dotenv.config({ path: envFilePath });

export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const DB_URL = process.env.DB_URL;