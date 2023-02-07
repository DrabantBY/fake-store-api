const getProductsList = async (skip: number) => {
  const response = await fetch(`https://dummyjson.com/products?skip=0&limit=100`);

  if (!response.ok) {
    throw new Response('', { status: response.status, statusText: 'An error has occurred' });
  }

  return response.json();
};

export default getProductsList;
