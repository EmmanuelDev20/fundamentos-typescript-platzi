export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes
};
