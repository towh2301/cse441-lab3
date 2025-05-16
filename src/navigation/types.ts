import { ProductResponse } from "@/src/queries/product/types";

export type RootStackParamList = {
  HomeProductScreen: undefined;
  ProductDetails: { product: ProductResponse };
  SearchProductScreen: undefined;
};

export type TabParamList = {
  Home: undefined;
  Add: undefined;
  Search: undefined;
  About: undefined;
};