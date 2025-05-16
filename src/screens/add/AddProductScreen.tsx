import { ProductCreationRequest } from '@/src/queries/product/types';
import { useAddProduct } from '@/src/queries/product/useAddProduct';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput } from 'react-native';
import { styles } from './styles';

export const AddProductScreen = () => {
  const { control, handleSubmit, reset } = useForm<ProductCreationRequest>();
  const { mutate, isPending, isSuccess, isError, error } = useAddProduct();

  const onSubmit = (data: ProductCreationRequest) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Product</Text>

      {[
        { name: 'title', placeholder: 'Title' },
        { name: 'description', placeholder: 'Description' },
        { name: 'price', placeholder: 'Price', type: 'numeric' },
        { name: 'category', placeholder: 'Category' },
        { name: 'rating', placeholder: 'Rating', type: 'numeric' },
        { name: 'stock', placeholder: 'Stock', type: 'numeric' },
        { name: 'brand', placeholder: 'Brand' },
        { name: 'thumbnail', placeholder: 'Thumbnail URL' },
        { name: 'images.0', placeholder: 'Image URL 1' },
        { name: 'images.1', placeholder: 'Image URL 2' },
        { name: 'tag.0', placeholder: 'Tag 1' },
        { name: 'tag.1', placeholder: 'Tag 2' },
      ].map((field, idx) => (
        <Controller
          key={idx}
          name={field.name as keyof ProductCreationRequest}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              keyboardType={field.type === 'numeric' ? 'numeric' : 'default'}
              onChangeText={onChange}
              value={value as string}
            />
          )}
        />
      ))}

      <Button
        title={isPending ? 'Adding...' : 'Add Product'}
        onPress={handleSubmit(onSubmit)}
        disabled={isPending}
      />

      {isSuccess && <Text style={styles.success}>{(error as any)?.message}</Text>}
    </ScrollView>
  );
};
