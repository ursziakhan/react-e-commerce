import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
function Cart() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartState.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>
          {cartState.length ? (
            cartState.map((product) => {
              return (
                <div key={product.id} className="mt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <img
                        src={product.image}
                        alt=""
                        className="object-cover w-16 h-16 rounded"
                      />

                      <div className="ml-4">
                        <h3 className="text-sm text-gray-900">
                          {product.name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Size:</dt>
                            <dd className="inline">XXS</dd>
                          </div>

                          <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">{product.color}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex items-center justify-end flex-1 gap-2">
                        <button
                          onClick={() =>
                            dispatch(cartActions.addToCart(product))
                          }
                          className="text-black-600 px-4 py-2 text-2xl"
                        >
                          +
                        </button>
                        <form>
                          <label for="Line1Qty" className="sr-only">
                            {' '}
                            Quantity{' '}
                          </label>

                          <input
                            value={product.quantity}
                            disabled
                            type="number"
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </form>
                        <button
                          onClick={() =>
                            dispatch(cartActions.removeFromCart(product))
                          }
                          className=" text-black-600 text-2xl px-4 py-2"
                        >
                          -
                        </button>

                        <button
                          onClick={() =>
                            dispatch(cartActions.deleteItem(product))
                          }
                          className="text-gray-600 transition hover:text-red-600"
                        >
                          <span className="sr-only">Remove item</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <p>No items in cart</p>
          )}
          <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
            <div className="w-screen max-w-lg space-y-4">
              <dl className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>{subtotal}</dd>
                </div>

                {/* <div className="flex justify-between">
                  <dt>VAT</dt>
                  <dd>£25</dd>
                </div> */}

                <div className="flex justify-between">
                  <dt>Discount</dt>
                  <dd></dd>
                </div>

                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>{subtotal}</dd>
                </div>
              </dl>
              <div className="flex justify-end">
                <a
                  href="/"
                  className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
