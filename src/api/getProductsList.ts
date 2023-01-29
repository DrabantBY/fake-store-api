const getProductsList = async (skip: number) => {
  const response = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=8`);

  return response.json();
};

export default getProductsList;
