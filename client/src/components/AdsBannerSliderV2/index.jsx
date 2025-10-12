import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/baneer2.png";
import banner3 from '../../assets/banner3.jpg';
import banner4 from "../../assets/banner4.jpg";
import { Navigation } from 'swiper/modules';

import BannerBox from "../BannerBox";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className='py-5 w-[100%] justify-between flex items-center flex-wrap gap-5'>
        <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn"
              >
                   <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
                   <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
                    <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
                    <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
                    <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
                    <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
                    <SwiperSlide>
                   <BannerBox info="left" img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} link={"/"} />
                   </SwiperSlide>
              </Swiper>
                 </div>
     
    
    
  )
}

export default AdsBannerSliderV2
