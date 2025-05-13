import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;

export const detailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    scrollContent: {
        paddingBottom: 80,
    },
    imageCarousel: {
        position: "relative",
    },
    carouselImage: {
        width: "40%",
        height: "40%",
        backgroundColor: "#F5F5F5",
    },
    imageIndicator: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    indicatorText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    detailsContainer: {
        padding: 15,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    brand: {
        fontSize: 14,
        color: "#666",
        marginBottom: 3,
    },
    category: {
        fontSize: 14,
        color: "#666",
        marginBottom: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF6F61",
    },
    discountedPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF6F61",
        marginRight: 10,
    },
    originalPrice: {
        fontSize: 16,
        color: "#666",
        textDecorationLine: "line-through",
        marginRight: 10,
    },
    discountText: {
        fontSize: 14,
        color: "#4CAF50",
        fontWeight: "bold",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    ratingText: {
        fontSize: 14,
        color: "#666",
        marginLeft: 5,
    },
    description: {
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
        marginTop: 10,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: "#FFF",
        borderTopWidth: 1,
        borderTopColor: "#E0E0E0",
        alignItems: "center",
    },
    addButton: {
        backgroundColor: "#FF6F61",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: "80%",
        alignItems: "center",
    },
    buttonDisabled: {
        backgroundColor: "#CCCCCC",
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});


export const cardStyles = StyleSheet.create({
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
        padding: 8,
        borderRadius: 100,
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