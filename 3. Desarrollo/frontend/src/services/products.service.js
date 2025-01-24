import axios from './root.service.js';

export async function getProducts() {
    try {
        const response = await axios.get("/product/list");
        return response;
    } catch (error) {
        return error;
    }
}