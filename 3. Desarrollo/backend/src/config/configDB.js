import { connect } from "mongoose";
import { DB_URL } from "./configEnv.js";

export default async function connectDB() {
    try {
        await connect(DB_URL);
        console.log('Base de datos conectada exitosamente!');
    } catch (error) {
        console.error('Error en configDB.js -> connectDB():', error);
    }
}