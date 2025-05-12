import { Product } from '@/src/queries/product/types';
import { Ionicons } from '@expo/vector-icons'; // For heart and star icons
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductCard = (product: Product) => {
  return (
    <View style={styles.card}>
      {/* Heart Icon */}
      <TouchableOpacity style={styles.heartIcon}>
        <Ionicons name="heart-outline" size={24} color="#FF6F61" />
      </TouchableOpacity>

      <View style={styles.imagePlaceholder}>
        <Ionicons name="shirt-outline" size={40} color="#FF6F61" />
      </View>

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name={index < 4 ? 'star' : 'star-outline'}
              size={16}
              color="#FFD700"
            />
          ))}
        </View>

        <Text style={styles.price}>{product.price}</Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductCard;