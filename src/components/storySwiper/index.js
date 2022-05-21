import  React, { useLayoutEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ItemStorySlide from 'components/itemStorySlide';

function StorySwiper ({
  data = [],
  renderItemCustom,
  customContainer, 
  customItem,
}) {
  const [totalSlide, setTotalSilde] = useState(5);
  // const widthWindow  = window.innerWidth;
  // const totalSlide = widthWindow >= 1200 ? 6 : widthWindow >= 750 ? 5 : 3
  useLayoutEffect(() => {
    function updateSize(){
      const widthWindow = window.innerWidth;
      setTotalSilde(widthWindow > 1380 ? 6 : widthWindow >= 750 ? 4 : 3);
    }
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [])
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={totalSlide}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} >
            <ItemStorySlide item={item}/>
          </SwiperSlide>
        )
        
      })}

    </Swiper>
  )
}

export default StorySwiper;