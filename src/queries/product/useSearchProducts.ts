import { useQuery } from "@tanstack/react-query";
import { productApis } from ".";
import { API_PRODUCT } from "./keys";

export function useSearchProducts(query: string) {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: [API_PRODUCT.SEARCH_PRODUCT, query],
    queryFn: () => productApis.searchProduct(query),
    enabled: !!query, // chỉ gọi khi query có nội dung
    staleTime: 1000 * 60 * 5,
  });

  return {
    products: data?.products || [],
    isLoading,
    isFetching,
    isError,
    error,
  };
}
