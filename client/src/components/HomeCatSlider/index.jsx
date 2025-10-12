import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <div className='HomeCatSlider py-8 pt-4'>
      <div className='container'>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
         
          modules={[Navigation]}
          className="mySwiper"
        >
          {[...Array(12)].map((_, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <Link to='/'>
                <div className='item py-8 px-3 bg-white rounded-sm text-center flex flex-center items-center justify-center flex-col'>
                  <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" className='w-[60px] transition-all'/>
                  <h3 className='text-[15px] font-[500] mt-3 '>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default HomeCatSlider
