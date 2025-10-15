import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductItem from '../Productitem';

const ProductSlider  = (props) => {
  const products = [
    {
      images: [
        "https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg",
        "https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg"
      ],
      brand: "Flying Machine",
      title: "Women Wide Leg High-Rise Light Fade Stretchable Jeans",
      rating: 4.5,
      oldPrice: "58.00",
      newPrice: "12.00",
      discount: 10
    },
    {
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080",
        "https://images.unsplash.com/photo-1688990982651-a5d751773eff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"
      ],
      brand: "Brand B",
      title: "Elegant Dress",
      rating: 4.0,
      oldPrice: "80.00",
      newPrice: "60.00",
      discount: 25
    },
    
  ];

  return (
    <section className='productsSlider py-5'>
        <div className='container'>
              <Swiper
                slidesPerView={props.items}
                spaceBetween={10}

                modules={[Navigation]}
                className="mySwiper"
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductItem product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>

        </div>
    </section>
  )
}

export default ProductSlider
