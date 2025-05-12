import { ProductResponse } from "@/src/queries/product/types";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Lấy chiều rộng màn hình để tính toán kích thước responsively
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9; // 90% chiều rộng màn hình

// Định nghĩa props cho ProductCard
interface ProductCardProps extends ProductResponse {
    onAddToCart?: (product: ProductResponse) => void; // Callback khi nhấn Add to Cart
    onToggleFavorite?: (productId: number) => void; // Callback khi nhấn nút yêu thích
    isFavorite?: boolean; // Trạng thái yêu thích
}

const ProductCard = memo(
    ({
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail,
        onAddToCart,
        onToggleFavorite,
        isFavorite = false,
    }: ProductCardProps) => {
        // Tính giá sau chiết khấu
        const discountedPrice = price * (1 - discountPercentage / 100);
        const hasDiscount = discountPercentage > 0;

        // Xử lý trạng thái tồn kho
        const isLowStock = stock <= 5;
        const stockStatus = stock > 0 ? (isLowStock ? "Còn ít" : "Còn hàng") : "Hết hàng";

        return (
            <View style={styles.card}>
                {/* Hình ảnh sản phẩm */}
                <View style={styles.imageContainer}>
                    {thumbnail ? (
                        <Image
                            source={{ uri: thumbnail }}
                            style={styles.thumbnail}
                            resizeMode="cover"
                            onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
                        />
                    ) : (
                        <View style={styles.imagePlaceholder}>
                            <Ionicons name="shirt-outline" size={40} color="#FF6F61" />
                        </View>
                    )}

                    {/* Nút yêu thích
                    <TouchableOpacity
                        style={styles.heartIcon}
                        onPress={() => onToggleFavorite?.(id)}
                    >
                        <Ionicons
                            name={isFavorite ? "heart" : "heart-outline"}
                            size={24}
                            color={isFavorite ? "#FF6F61" : "#666"}
                        />
                    </TouchableOpacity> */}
                </View>

                {/* Thông tin sản phẩm */}
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                        {title}
                    </Text>
                    <Text
                        style={styles.description}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {description}
                    </Text>

                    {/* Đánh giá */}
                    <View style={styles.rating}>
                        {[...Array(5)].map((_, index) => (
                            <Ionicons
                                key={index}
                                name={index < Math.round(rating) ? "star" : "star-outline"}
                                size={16}
                                color="#FFD700"
                            />
                        ))}
                        <Text style={styles.ratingText}>({rating.toFixed(1)})</Text>
                    </View>

                    {/* Giá và chiết khấu */}
                    <View style={styles.priceContainer}>
                        {hasDiscount ? (
                            <>
                                <Text style={styles.discountedPrice}>
                                    ${discountedPrice.toFixed(2)}
                                </Text>
                                <Text style={styles.originalPrice}>${price.toFixed(2)}</Text>
                            </>
                        ) : (
                            <Text style={styles.price}>${price.toFixed(2)}</Text>
                        )}
                    </View>

                    {/* Trạng thái tồn kho */}
                    <Text
                        style={[
                            styles.stockStatus,
                            { color: stock > 0 ? (isLowStock ? "#FFA500" : "#4CAF50") : "#F44336" },
                        ]}
                    >
                        {stockStatus}
                    </Text>
                </View>

                {/* Nút Add to Cart */}
                <TouchableOpacity
                    style={[styles.button, stock === 0 && styles.buttonDisabled]}
                    //onPress={() => stock > 0 && onAddToCart?.({ id, title, description, price, discountPercentage, rating, stock, thumbnail })}
                    disabled={stock === 0}
                >
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
        width: CARD_WIDTH,
    },
    imageContainer: {
        position: "relative",
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    imagePlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
    },
    heartIcon: {
        position: "absolute",
        top: 2,
        right: 2,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 12,
        padding: 2,
    },
    details: {
        flex: 1,
        marginLeft: 15,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    description: {
        fontSize: 12,
        color: "#666",
        marginVertical: 5,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    ratingText: {
        fontSize: 12,
        color: "#666",
        marginLeft: 5,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF6F61",
    },
    discountedPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF6F61",
        marginRight: 8,
    },
    originalPrice: {
        fontSize: 12,
        color: "#666",
        textDecorationLine: "line-through",
    },
    stockStatus: {
        fontSize: 12,
        fontWeight: "500",
        marginTop: 5,
    },
    button: {
        backgroundColor: "#FF6F61",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    buttonDisabled: {
        backgroundColor: "#CCCCCC",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
});

export default ProductCard;