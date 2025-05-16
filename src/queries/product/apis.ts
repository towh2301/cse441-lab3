import { API_URL } from "@/src/constants/keys";
import httpPublicRequest from "@/src/utils/httpPublicRequest";
import { ApiResponseType, PaginationResponseType } from "../helpers";
import { ProductCreationRequest, ProductResponse } from "./types";

const useApis = (baseUrl = API_URL) => {
    const publicApi = httpPublicRequest(baseUrl);

    const getAllProducts = async (params: { current?: number; pageSize?: number }) => {
        const { current = 0, pageSize = 30 } = params;
        const response = await publicApi.get<
            ApiResponseType<PaginationResponseType<ProductResponse[]>>
        >(`/products?skip=${current * pageSize}&limit=${pageSize}`);
        return response.data;
    } // Trả về dữ liệu trực tiếp

    const searchProduct = async (query: string) => {
        const response = await publicApi.get(`/products/search?q=${query}`);
        return response.data;
    };

    const addProduct = async (payload: ProductCreationRequest) => {
        return await publicApi.post('/products/add', payload)
    }

    return {
        getAllProducts,
        searchProduct,
        addProduct
    }
};

export default useApis;