import { API_URL } from "@/src/constants/keys";
import httpPublicRequest from "@/src/utils/httpPublicRequest";
import { Product } from "./types";

export const productApis = (baseUrl = API_URL) => {
    const publicApi = httpPublicRequest(baseUrl);

    const getAllProducts = () => {
        return publicApi.get('/products')
    }

    const addNewProduct = (data: Product) => {
        return publicApi.post('/products/add', data)
    }

    const searchProduct = (query: string) => {
        return publicApi.get(`/products/search?q=${query}`)
    }

    return {
        getAllProducts,
        addNewProduct,
        searchProduct
    }
}