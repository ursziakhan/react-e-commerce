import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => {
    activeSlide < 2 ? setActiveSlide(activeSlide + 1) : setActiveSlide(0);
  };

  const preSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : (prev -= 1)));
  };
  const loop = (current) => {
    return current === 0 ? 3 : (current -= 1);
  };
  const autoLoop = () => {
    setInterval(preSlide, 3000);
  };
  useEffect(() => {
    autoLoop();
  }, []);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div
          id="0"
          className="carousel-item active relative float-left w-full "
          style={{ display: activeSlide === 0 ? 'block' : 'none' }}
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption  hidden md:block absolute top-[50%] w-full  ">
            <h5 className="text-xl text-black-600  text-center">
              First slide label
            </h5>
            <p className="text-black text-center ">
              Some representative placeholder content for the first slide.
            </p>
            <div className="flex justify-center mt-5">
              <NavLink to="/shop">
                <button className="  bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  Shop
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          id="1"
          className="carousel-item relative float-left w-full"
          style={{ display: activeSlide === 1 ? 'block' : 'none' }}
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute top-[50%] w-full ">
            <h5 className="text-xl text-center">Second slide label</h5>
            <p className="text-center">
              Some representative placeholder content for the second slide.
            </p>
            <div className="flex justify-center mt-5">
              <NavLink to="/shop">
                <button className="  bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  Shop
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          id="2"
          className="carousel-item relative float-left w-full"
          style={{ display: activeSlide === 2 ? 'block' : 'none' }}
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="block w-full"
            alt="..."
          />
          <div className=" carousel-caption hidden md:block absolute top-[50%] w-full">
            <h5 className="text-xl text-center">Third slide label</h5>
            <p className="text-center">
              My button Some representative placeholder content for the third
              slide.
            </p>
            <div className="flex justify-center mt-5">
              <NavLink to="/shop">
                <button className="  bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  Shop
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={preSlide}
        className="  carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat pl-5"
          aria-hidden="true"
        ></span>
        <GoChevronLeft className="bg-amber-500 h-10  w-10 hover:bg-amber-400 p-2 rounded" />
      </button>
      <button
        onClick={nextSlide}
        className="pr-5 carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat pr-5 "
          aria-hidden="true"
        ></span>

        <GoChevronRight className="bg-amber-500 h-10  w-10 hover:bg-amber-400 p-2 rounded" />
      </button>
    </div>
  );
}

export default Slider;
