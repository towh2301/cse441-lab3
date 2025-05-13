import { ProductResponse } from "@/src/queries/product/types";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { cardStyles } from "./styles";

// Lấy chiều rộng màn hình để tính toán kích thước responsively

// Định nghĩa props cho ProductCard
interface ProductCardProps extends ProductResponse {
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
    }: ProductCardProps) => {
        // Tính giá sau chiết khấu
        const discountedPrice = price * (1 - discountPercentage / 100);
        const hasDiscount = discountPercentage > 0;

        // Xử lý trạng thái tồn kho
        const isLowStock = stock <= 5;
        const stockStatus = stock > 0 ? (isLowStock ? "Còn ít" : "Còn hàng") : "Hết hàng";

        return (
            <View style={cardStyles.card}>
                {/* Hình ảnh sản phẩm */}
                <View style={cardStyles.imageContainer}>
                    {thumbnail ? (
                        <Image
                            source={{ uri: thumbnail }}
                            style={cardStyles.thumbnail}
                            resizeMode="cover"
                            onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
                        />
                    ) : (
                        <View style={cardStyles.imagePlaceholder}>
                            <Ionicons name="shirt-outline" size={40} color="#FF6F61" />
                        </View>
                    )}
                </View>

                {/* Thông tin sản phẩm */}
                <View style={cardStyles.details}>
                    <Text style={cardStyles.title} numberOfLines={1} ellipsizeMode="tail">
                        {title}
                    </Text>
                    <Text
                        style={cardStyles.description}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {description}
                    </Text>

                    {/* Đánh giá */}
                    <View style={cardStyles.rating}>
                        {[...Array(5)].map((_, index) => (
                            <Ionicons
                                key={index}
                                name={index < Math.round(rating) ? "star" : "star-outline"}
                                size={16}
                                color="#FFD700"
                            />
                        ))}
                        <Text style={cardStyles.ratingText}>({rating.toFixed(1)})</Text>
                    </View>

                    {/* Giá và chiết khấu */}
                    <View style={cardStyles.priceContainer}>
                        {hasDiscount ? (
                            <>
                                <Text style={cardStyles.discountedPrice}>
                                    ${discountedPrice.toFixed(2)}
                                </Text>
                                <Text style={cardStyles.originalPrice}>${price.toFixed(2)}</Text>
                            </>
                        ) : (
                            <Text style={cardStyles.price}>${price.toFixed(2)}</Text>
                        )}
                    </View>

                    {/* Trạng thái tồn kho */}
                    <Text
                        style={[
                            cardStyles.stockStatus,
                            { color: stock > 0 ? (isLowStock ? "#FFA500" : "#4CAF50") : "#F44336" },
                        ]}
                    >
                        {stockStatus}
                    </Text>
                </View>

                {/* Nút Add to Cart */}
                <TouchableOpacity
                    style={[cardStyles.button, stock === 0 && cardStyles.buttonDisabled]}
                    //onPress={() => stock > 0 && onAddToCart?.({ id, title, description, price, discountPercentage, rating, stock, thumbnail })}
                    disabled={stock === 0}
                >
                    <Ionicons
                        style={cardStyles.buttonText && { fontWeight: "bold" }}
                        name={"add"}
                        size={24}
                        color={"#FFFFFF"}
                    />
                </TouchableOpacity>
            </View>
        );
    }
);


export default ProductCard;