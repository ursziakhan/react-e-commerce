export const fetchAllProducts = async () => {
  try {
    const response = await fetch(
      'https://react-ecommerce-369ac-default-rtdb.firebaseio.com/products.json'
    );

    if (!response.ok) {
      throw new Error('Server error ' + response.status);
    }
    const data = await response.json();
    let loadedProducts = [];
    // console.log(data);
    for (let item in data) {
      loadedProducts.push({
        id: item,
        ...data[item],
      });
      // loadedProducts.push({
      //   id: item,
      //   image: data[item].image,
      //   price: data[item].price,
      //   brand: data[item].brand,
      //   category: data[item].category
      // });
      // {`data1`, 'data2'}
    }
    /*item =  {brnad: 12, image":alsdklas, price:12}
    {id: 0192, ...item} => {id: 0192, brnad: 12, image":alsdklas, price:12}  */
    return loadedProducts;
  } catch (error) {
    console.log(error);
  }
};
export const fetchSingleProduct = async (num) => {
  try {
    const response = await fetch(
      `https://react-ecommerce-369ac-default-rtdb.firebaseio.com/products/${num}.json`
    );
    if (!response.ok) throw new Error('Error fetching product!');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
