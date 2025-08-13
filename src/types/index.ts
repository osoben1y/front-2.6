export interface IProduct {
  id: number;
  image: string;
  newPrice: number;
  oldPrice: number;
  splitPrice: number;
  description: string;
  rating: number;
  review: number;
  stock: number;
}

export type ICartProduct = IProduct & {
  amount: number;
};
