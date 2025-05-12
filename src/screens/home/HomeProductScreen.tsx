import { useGetAllProducts } from "@/src/queries/product/useGetAllProducts";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../product/ProductCard";
import { homeStyles } from "./styles";

export default function HomeProductScreen() {
  const { products, isLoading, isError, error, setParams, isFetching, totalElements } = useGetAllProducts();

  useEffect(() => {
    setParams({
      current: 0,
      pageSize: 30, // API mặc định trả về 30 sản phẩm mỗi lần
    });
  }, []);

  const handleLoadMore = () => {
    if (!isFetching && products.length < totalElements) {
      setParams((prev) => ({
        ...prev,
        current: (prev.current as number || 0) + 1,
      }));
    }
  };

  const renderFooter = () => {
    if (!isFetching) return null;
    return <ActivityIndicator size="large" color="#FF6F61" />;
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
        <Text style={homeStyles.errorText}>Lỗi: {error?.message || "Không thể tải sản phẩm"}</Text>
      </View>
    );
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.normalText}>Danh sách sản phẩm</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerStyle={localStyles.list}
      />
    </View>
  );
}


const localStyles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
});