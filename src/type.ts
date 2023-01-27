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

export type RangeFilterDataType = {
  min: number;
  step: number;
  max: number;
  rangeId: string;
  init: number;
};

export type FilterArgsType = {
  search: string;
  sort: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  maxRating: number;
};
