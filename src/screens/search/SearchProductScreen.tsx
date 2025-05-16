import { RootStackParamList } from '@/src/navigation/types';
import { useSearchProducts } from '@/src/queries/product/useSearchProducts';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { homeStyles } from '../home/styles';
import ProductCard from '../product/ProductCard';
import styles from '../styles';


type SearchNavigationProp = StackNavigationProp<RootStackParamList, "SearchProductScreen">;
export default function SearchProductScreen() {
	const [input, setInput] = useState<string>("");

	const navigate = useNavigation<SearchNavigationProp>();

	const [searchText, setSearchText] = useState<string>();

	const { isError, isLoading, isFetching, products, error } = useSearchProducts(searchText || "");


	const handleSearch = () => {
		setSearchText(input);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={homeStyles.container}>
				<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tìm kiếm sản phẩm</Text>
				<TextInput
					style={styles.input}
					placeholder="Nhập từ khóa..."
					value={input}
					onChangeText={setInput}
					onSubmitEditing={handleSearch}
					returnKeyType="search"
				/>

				{isLoading || isFetching ? (
					<ActivityIndicator size="large" color="#FF6F61" />
				) : isError ? (
					<Text style={homeStyles.errorText}>
						Lỗi: {error?.message || "Không thể tải sản phẩm"}
					</Text>
				) : (
					<>
						<Text style={{ fontWeight: '600', marginBottom: 8 }}>
							Kết quả: {products.length} sản phẩm
						</Text>
						<FlatList
							data={products}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() =>
										navigate.navigate("ProductDetails", { product: item })
									}
								>
									<ProductCard {...item} />
								</TouchableOpacity>
							)}
							keyExtractor={(item) => item.id.toString()}
							onEndReachedThreshold={0.5}
						/>
					</>
				)}
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
