import { filterCategoryByWomen } from '../helpers/filterByWomen';

const getCategories = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = (await response.json()) as string[];
    return filterCategoryByWomen(categories);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getCategories;
