import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className=' p-6 flex-col items-center justify-center'>
      <Slider {...settings}>
        <div  className='p-4'>
        <div  className='flex flex-row items-center justify-center'>
          <img src='./images/1.png' className=' rounded-xl' width={750} alt='slide1' />
        </div>
        </div>
        <div className='p-4'>
        <div  className='flex flex-row items-center justify-center'>
          <img src='./images/2.png' className=' rounded-xl' width={750} alt='slide2' />
        </div>
        </div>
        <div className='p-4'>
        <div  className='flex flex-row items-center justify-center'>
          <img src='./images/3.png' className=' rounded-xl' width={750} alt='slide3' />
        </div>
        </div>
      </Slider>
      <h1 className='text-center font-Kite text-2xl font-bold mt-11 text-white'>
        Transform Your Data Into Meaningful Insights
      </h1>
      <div className='mt-8 flex justify-center'>
        <Link to='/sign-up' className='bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none focus:bg-blue-600'>
          Get Started
        </Link>
      </div>
    </div>
  );
};
