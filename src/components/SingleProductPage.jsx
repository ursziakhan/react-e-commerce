import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../allProducts';
import { useState, useEffect } from 'react';
/* 
  To grab the id from the url we have to use useParams method from react-router
  and grab the { id } from useParams() like this.
*/
const SingleProductPage = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [activeImage, setActiveImage] = useState(0);
  const changeImage = (e) => {
    const imageHtmlId = e.target.id;
    setActiveImage(imageHtmlId);
  };

  const getProduct = async () => {
    const product = await fetchSingleProduct(id);
    setSingleProduct(product);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative ">
              <img
                id="0"
                src={
                  activeImage == 0
                    ? singleProduct.image
                    : activeImage == 1
                    ? singleProduct.image2
                    : singleProduct.image3
                }
                className="w-full relative z-10 mt-10"
                alt=""
                style={{
                  height: '500px',
                  width: '500px',
                  borderRadius: '10px',
                  margin: '10px auto',
                }}
              />
              <div className="flex flex-row">
                <div
                  className="card"
                  style={{ height: '200px', width: '200px' }}
                >
                  <img
                    onClick={changeImage}
                    id="1"
                    src={singleProduct.image2}
                    alt="Second "
                    style={{ width: '200px', height: '200px' }}
                  />
                </div>
                <div
                  className="card"
                  style={{ height: '200px', width: '200px' }}
                >
                  <img
                    onClick={changeImage}
                    id="2"
                    src={singleProduct.image3}
                    alt="Rain coat 3"
                  />
                </div>
                <div
                  className="card"
                  style={{ height: '200px', width: '200px' }}
                >
                  <img
                    onClick={changeImage}
                    id="0"
                    src={singleProduct.image}
                    alt="Second "
                    style={{ width: '200px', height: '200px' }}
                  />
                </div>
              </div>
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">
                {singleProduct.name}
              </h1>
              <p className="text-sm">
                {singleProduct.description}
                <a
                  href="/"
                  className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                >
                  MORE <i className="mdi mdi-arrow-right"></i>
                </a>
              </p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {singleProduct.price}
                </span>
                {/* <span className="text-2xl leading-none align-baseline">
                    .99
                  </span> */}
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
