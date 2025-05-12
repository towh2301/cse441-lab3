import { API_URL } from "@/src/constants/keys";
import httpPublicRequest from "@/src/utils/httpPublicRequest";
import { ApiResponseType, PaginationResponseType } from "../helpers";
import { ProductResponse } from "./types";

const useApis = (baseUrl = API_URL) => {
    const publicApi = httpPublicRequest(baseUrl);

    const getAllProducts = async (params: { current?: number; pageSize?: number }) => {
        const { current = 0, pageSize = 30 } = params;
        const response = await publicApi.get<
            ApiResponseType<PaginationResponseType<ProductResponse[]>>
        >(`/products?skip=${current * pageSize}&limit=${pageSize}`);
        return response.data;
    } // Trả về dữ liệu trực tiếp

    const addNewProduct = (data: ProductResponse) => {
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
};

export default useApis;