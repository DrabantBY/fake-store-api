const getCategories = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = (await response.json()) as string[];
    return categories;
  } catch (err) {
    return [];
  }
};

export default getCategories;
