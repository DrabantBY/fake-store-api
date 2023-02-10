const getUser = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);

  if (!response.ok) {
    throw new Response('', { status: response.status, statusText: 'An error has occurred' });
  }

  return response.json();
};

export default getUser;
