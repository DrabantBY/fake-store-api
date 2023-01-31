export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface CartItemInterface extends ProductInterface {
  cart: number;
}

export interface CartStateInterface {
  cartState: CartItemInterface[];
  // updateCartItem: (product: ProductInterface, step: 1 | -1) => void;
  removeCartItem: (productId: number) => void;
  addCartItem: (product: ProductInterface) => void;
  getCartParams: () => { cartSize: number; cartSum: number };
  isCartItem: (productId: number) => boolean;
}

export type RangeFilterDataType = {
  min: number;
  step: number;
  max: number;
  rangeId: string;
  init: number;
};

export type ProductsResponseType = {
  products: ProductInterface[];
  total: number;
  skip: number;
  limit: number;
};
