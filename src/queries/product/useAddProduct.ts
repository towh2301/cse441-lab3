import { useMutation } from "@tanstack/react-query";
import { productApis } from ".";
import { ProductCreationRequest } from "./types";

export const useAddProduct = () => {
  const {
    mutate,
    isError,
    isSuccess,
    error,
    isPending,
    data
  } = useMutation({
    mutationFn: (payload: ProductCreationRequest) => productApis.addProduct(payload)
  });

  return {
    isError,
    error,
    isSuccess,
    isPending,
    mutate, // usage: mutate(payload)
    data
  };
};
