import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useState } from "react";
import { productApis } from ".";
import { ApiResponseType, isEmpty, PaginationResponseType, responseWrapper, TableParams } from "../helpers";
import { API_PRODUCT } from "./keys";
import { ProductResponse } from "./types";

export function useGetAllProducts(
    options?: UseQueryOptions<ApiResponseType<PaginationResponseType<ProductResponse[]>>, Error> & {
        defaultParams?: TableParams
    }
) {
    // Set params for pagination and for enable auto fetching
    const [params, setParams] = useState(options?.defaultParams || {});

    const { data, isLoading, isError, error, refetch: onGetAllProducts } = useQuery<
        ApiResponseType<PaginationResponseType<ProductResponse[]>>,
        Error
    >(
        {
            queryKey: [API_PRODUCT.GET_ALL_PRODUCT, { ...params }],
            queryFn: async ({ queryKey }) => {
                const [, ...params] = queryKey;
                return responseWrapper<ApiResponseType<PaginationResponseType<ProductResponse[]>>>(
                    productApis.getAllProducts,
                    params,
                );
            },
            enabled: !isEmpty(params),
            ...options,
        }
    )
    return {
        data,
        isLoading,
        isError,
        error,
        onGetAllProducts,
        params,
        setParams,
    };
}