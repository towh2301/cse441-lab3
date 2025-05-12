export interface ProductResponse {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    thumbnail: string,
    images: string[],
    tag: string[]
}