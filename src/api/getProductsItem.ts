const getProductsItem = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  return response.json();
};

export default getProductsItem;
