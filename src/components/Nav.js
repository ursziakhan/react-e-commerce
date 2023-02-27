import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
function Nav() {
  const [toggle, setToogle] = useState(false);
  const [active, setActive] = useState(0);
  const cartState = useSelector((state) => state.cart);
  // console.log(cartState);
  const totalProductsInCart = cartState.length;

  const open = () => {
    setToogle(!toggle);
  };
  const change = (e) => {
    let ids = e.target.id;
    ids = Number(ids);
    setActive(ids);
  };

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] flex justify-between py-[15px] mx-auto">
        <div className="text-3xl font-bold">My Logo</div>
        {toggle ? (
          <AiOutlineClose
            onClick={open}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={open}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10 ">
          <li>
            <NavLink
              to="/"
              id="0"
              onClick={change}
              style={
                active === 0
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              id="1"
              onClick={change}
              style={
                active === 1
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              id="2"
              onClick={change}
              style={
                active === 2
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              id="3"
              onClick={change}
              style={
                active === 3
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <ul className="hidden md:flex text-white gap-10">
          <li>
            <NavLink
              to="/wishlist"
              id="4"
              onClick={change}
              style={
                active === 4
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              id="5"
              onClick={change}
              style={
                active === 5
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Cart {totalProductsInCart}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              id="6"
              onClick={change}
              style={
                active === 6
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* ////////////////////Responsive Menu //////////////////*/}
        <ul
          className={`md:hidden w-full h-screen z-10 text-white fixed bg-black  top-[92px]
        ${toggle ? 'left-[0]' : 'left-[-100%]'}`}
        >
          <li className="p-5">
            <NavLink
              to="/"
              id="7"
              onClick={change}
              style={
                active === 7
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="shop"
              id="8"
              onClick={change}
              style={
                active === 8
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="/contact"
              id="9"
              onClick={change}
              style={
                active === 9
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="/about"
              id="10"
              onClick={change}
              style={
                active === 10
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              About
            </NavLink>
          </li>

          <li className="p-5">
            <NavLink
              to="/wishlist"
              id="11"
              onClick={change}
              style={
                active === 11
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Wishlist
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="/cart"
              id="12"
              onClick={change}
              style={
                active === 12
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Cart
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="/login"
              id="13"
              onClick={change}
              style={
                active === 13
                  ? {
                      background: 'yellow',
                      padding: '5px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
