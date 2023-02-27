import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
// import data from '../utlis/data';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../allProducts';
const CardTab = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  async function getAllProducts() {
    const fetchedProducts = await fetchAllProducts();
    setProducts(fetchedProducts);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const navigate = useNavigate();

  const activeTab = (e) => {
    let ids = e.target.id;
    ids = Number(ids); //convertung string into number
    setActive(ids);
  };
  const filteredProducts = products.filter((product) => {
    if (active === 0) {
      return product;
    } else if (active === 1) return product.category === 'shirts';
    else return product.category === 'Pants';
  });
  function handleAddToCart(product) {
    dispatch(cartActions.addToCart(product));
  }

  return (
    <div>
      <div className="flex justify-center gap-6 text-lg font-bold mt-10 mb-5">
        <button
          onClick={activeTab}
          id="0"
          className={
            active === 0
              ? 'bg-amber-500 hover:bg-amber-400 p-2 rounded'
              : 'bg-none'
          }
        >
          ALL
        </button>
        <button
          onClick={activeTab}
          id="1"
          className={
            active === 1
              ? 'bg-amber-500 hover:bg-amber-400 p-2 rounded'
              : 'bg-none'
          }
        >
          Shirts
        </button>
        <button
          onClick={activeTab}
          id="2"
          className={
            active === 2
              ? 'bg-amber-500 hover:bg-amber-400 p-2 rounded'
              : 'bg-none'
          }
        >
          Pants
        </button>
      </div>
      <section className="grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="card">
              <div
                className="cursor-pointer"
                onClick={() => navigate('/products/' + product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded shadow max-w-full h-auto w-full "
                />
                <div className="flex flex-col items-center justify-center p-5">
                  <h2 className="font-bold">{product.name}</h2>
                  <p className="mb-2">{product.brand}</p>
                  <p>Sek-{product.price}</p>
                  <div className="mt-5"></div>
                </div>
              </div>
              <div className="flex justify-center pb-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="primary-button"
                  type="button"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => navigate('/products/' + product.id)}
                  className="primary-button ml-5"
                  type="button"
                >
                  View
                </button>
                <button className="primary-button ml-5" type="button">
                  Add to wishlist
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CardTab;
