const deleteUser = async (
  userId: number,
  method: string
): Promise<{ firstName: string; lastName: string }> => {
  const options = { method };
  const response = await fetch(`https://dummyjson.com/users/${userId}`, options);
  if (!response.ok) {
    throw new Response('', { status: response.status, statusText: 'An error has occurred' });
  }
  const data = await response.json();
  return data;
};

export default deleteUser;
