import { RootStackParamList } from "@/src/navigation/types";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { detailsStyles } from "./styles";

type ProductDetailProps = StackScreenProps<RootStackParamList, "ProductDetails">;

const ProductDetails: React.FC<ProductDetailProps> = ({ route, navigation }) => {
    const { product } = route.params;
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail,
        images = [],
        brand,
        category,
    } = product;
    
    const { width, height } = Dimensions.get("window");

    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const discountedPrice = price * (1 - discountPercentage / 100);
    const hasDiscount = discountPercentage > 0;

    const allImages = [thumbnail, ...images].filter(Boolean);
    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentImageIndex(index);
    };

    const toggleFavorite = () => {
        setIsFavorite((prev) => !prev);
        Alert.alert(
            "Yêu thích",
            isFavorite
                ? `Đã xóa ${title} khỏi danh sách yêu thích`
                : `Đã thêm ${title} vào danh sách yêu thích`
        );
    };

    const handleAddToCart = () => {
        if (stock === 0) {
            Alert.alert("Hết hàng", "Sản phẩm hiện tại đã hết hàng.");
            return;
        }
        Alert.alert("Thêm vào giỏ hàng", `Đã thêm ${title} vào giỏ hàng!`);
    };

    const fallbackImage = "https://via.placeholder.com/300";

    return (
        <View style={detailsStyles.container}>
            <View style={detailsStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={detailsStyles.headerTitle}>Chi tiết sản phẩm</Text>
                <TouchableOpacity onPress={toggleFavorite}>
                    <Ionicons
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={24}
                        color={isFavorite ? "#FF6F61" : "#666"}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={detailsStyles.scrollContent}>
                <View style={detailsStyles.imageCarousel}>
                    {allImages.length > 0 ? (
                        <FlatList
                            data={allImages}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item || fallbackImage }}
                                    style={detailsStyles.carouselImage}
                                    resizeMode="cover"
                                    onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                            scrollEventThrottle={16}
                        />
                    ) : (
                        <Image
                            source={{ uri: fallbackImage }}
                            style={detailsStyles.carouselImage}
                            resizeMode="cover"
                        />
                    )}
                    {allImages.length > 1 && (
                        <View style={detailsStyles.imageIndicator}>
                            <Text style={detailsStyles.indicatorText}>
                                {currentImageIndex + 1} / {allImages.length}
                            </Text>
                        </View>
                    )}
                </View>

                <View style={detailsStyles.detailsContainer}>
                    <Text style={detailsStyles.title}>{title}</Text>
                    <Text style={detailsStyles.brand}>Thương hiệu: {brand || "Không xác định"}</Text>
                    <Text style={detailsStyles.category}>Danh mục: {category || "Không xác định"}</Text>

                    <View style={detailsStyles.priceContainer}>
                        {hasDiscount ? (
                            <>
                                <Text style={detailsStyles.discountedPrice}>
                                    ${discountedPrice.toFixed(2)}
                                </Text>
                                <Text style={detailsStyles.originalPrice}>${price.toFixed(2)}</Text>
                                <Text style={detailsStyles.discountText}>
                                    (-{discountPercentage.toFixed(0)}%)
                                </Text>
                            </>
                        ) : (
                            <Text style={detailsStyles.price}>${price.toFixed(2)}</Text>
                        )}
                    </View>

                    <View style={detailsStyles.rating}>
                        {[...Array(5)].map((_, index) => (
                            <Ionicons
                                key={index}
                                name={index < Math.round(rating) ? "star" : "star-outline"}
                                size={16}
                                color="#FFD700"
                            />
                        ))}
                        <Text style={detailsStyles.ratingText}>({rating.toFixed(1)})</Text>
                    </View>

                    {description && <Text style={detailsStyles.description}>{description}</Text>}
                </View>
            </ScrollView>

            <View style={detailsStyles.footer}>
                <TouchableOpacity
                    style={[detailsStyles.addButton, stock === 0 && detailsStyles.buttonDisabled]}
                    onPress={handleAddToCart}
                    disabled={stock === 0}
                >
                    <Text style={detailsStyles.addButtonText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default ProductDetails;