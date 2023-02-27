export const insertProducts = async (data) => {
  const response = await fetch(
    'https://react-ecommerce-369ac-default-rtdb.firebaseio.com/products.json',
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    console.log('Erro inserting data');
    return;
  }
  return response;
};

export const getProducts = async () => {
  const response = await fetch(
    'https://react-ecommerce-369ac-default-rtdb.firebaseio.com/products.json'
  );
  if (!response.ok) {
    console.log('Error fetching data');
    return;
  }
  const products = await response.json();
  //   console.log(products);
  return products;
};

export const sendCartData = async (data) => {
  const response = await fetch(
    'https://react-ecommerce-369ac-default-rtdb.firebaseio.com/cart.json',
    {
      method: 'PUT',
      body: JSON.stringify(data),
    }
  );
  const responseData = await response.json();
  return responseData;
};
export const fetchCartData = async () => {
  const response = await fetch(
    'https://react-ecommerce-369ac-default-rtdb.firebaseio.com/cart.json'
  );
  if (!response.ok) {
    throw new Error('an error occurred');
  }
  const data = await response.json();
  return data;
};

// POST = SEND DATA
// GET = GET / GETCH DATA
// PUT = UPDATE DATA
// DELETE = DELETE DATA
