// src/screens/home/HomeProductScreen.tsx
import { RootStackParamList } from "@/src/navigation/types";
import { useGetAllProducts } from "@/src/queries/product/useGetAllProducts";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "../product/ProductCard";
import { homeStyles } from "./styles";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "HomeProductScreen">;

export default function HomeProductScreen() {
  const { products, isLoading, isError, error, setParams, isFetching, totalElements } =
    useGetAllProducts();
  const navigation = useNavigation<HomeNavigationProp>();
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setParams({
      current: 0,
      pageSize: 30,
    });
  }, []);

  const handleLoadMore = () => {
    if (!isFetching && products.length < totalElements) {
      setParams((prev) => ({
        ...prev,
        current: (prev.current ?? 0) as number + 1,
      }));
    }
  };

  const renderFooter = () => {
    if (!isFetching) return null;
    return (
      <View style={localStyles.footer}>
        <ActivityIndicator size="large" color="#FF6F61" />
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={homeStyles.container}>
        <ActivityIndicator size="large" color="#FF6F61" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={homeStyles.container}>
        <Text style={homeStyles.errorText}>
          Lỗi: {error?.message || "Không thể tải sản phẩm"}
        </Text>
      </View>
    );
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.normalText}>Danh sách sản phẩm</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
          >
            <ProductCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerStyle={localStyles.list}
        ListEmptyComponent={
          <Text style={localStyles.emptyText}>Không có sản phẩm nào.</Text>
        }
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  list: {
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  footer: {
    paddingVertical: 10,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    paddingVertical: 20,
  },
});