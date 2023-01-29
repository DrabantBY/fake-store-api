const getProductsCategory = async (category: string) => {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`);

  return response.json();
};

export default getProductsCategory;
