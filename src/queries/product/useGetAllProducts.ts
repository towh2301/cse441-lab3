import { useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { useState } from "react";
import { productApis } from ".";
import { ApiResponseType, PaginationResponseType, responseWrapper, TableParams } from "../helpers";
import { API_PRODUCT } from "./keys";
import { ProductResponse } from "./types";

// Định nghĩa kiểu cho queryKey
type GetAllProductsQueryKey = [string, TableParams];

export function useGetAllProducts(
    options?: UseQueryOptions<
        ApiResponseType<PaginationResponseType<ProductResponse[]>>,
        Error,
        ApiResponseType<PaginationResponseType<ProductResponse[]>>,
        GetAllProductsQueryKey
    > & {
        defaultParams?: TableParams;
    }
) {
    const [params, setParams] = useState<TableParams>(options?.defaultParams || { current: 0, pageSize: 10 });

    const { data, isLoading, isError, error, refetch, isFetching } = useQuery<
        ApiResponseType<PaginationResponseType<ProductResponse[]>>,
        Error,
        ApiResponseType<PaginationResponseType<ProductResponse[]>>,
        GetAllProductsQueryKey
    >({
        queryKey: [API_PRODUCT.GET_ALL_PRODUCT, params],
        queryFn: async ({ queryKey }) => {
            const [, queryParams] = queryKey;
            return responseWrapper<ApiResponseType<PaginationResponseType<ProductResponse[]>>>(
                productApis.getAllProducts,
                queryParams as any
            );
        },
        staleTime: 5 * 60 * 1000, // Dữ liệu "tươi" trong 5 phút
        gcTime: 10 * 60 * 1000, // Dữ liệu được giữ trong cache 10 phút (thay cacheTime)
        retry: 2, // Thử lại 2 lần nếu thất bại
        enabled: !!params, // Chỉ fetch khi params tồn tại
        ...options,
    });

    const queryClient = useQueryClient();

    const handleInvalidateProductsList = (newParams?: TableParams) => {
        queryClient.invalidateQueries({
            queryKey: [API_PRODUCT.GET_ALL_PRODUCT, newParams || params],
        });
    };

    // Xử lý dữ liệu an toàn
    const products = data?.products || [];
    const totalElements = data?.total || 0;
    const pageSize = data?.limit || 30;
    const totalPages = Math.ceil((data?.total || 0) / (data?.limit || 30));

    return {
        products,
        totalPages,
        pageSize,
        totalElements,
        isLoading,
        isError,
        isFetching,
        error,
        params,
        setParams,
        refetch,
        handleInvalidateProductsList,
    };
}