import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import StartRating from '../../components/ratingStar';
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { DATA_SLIDE_LOGIN } from "constant";
import themedStyle from "./styles";
import { Fade } from "@material-ui/core";

SwiperCore.use([Autoplay, Navigation]);

function SlideLoginPage() {
  const classes = themedStyle();

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
      navigation={{
        nextEl: ".review-swiper-button-next",
        prevEl: ".review-swiper-button-prev",
      }}
    >
      {DATA_SLIDE_LOGIN.map((item, index) => {
        const precision = item.description.rating ? item.description.rating?.toString().split(".")[1] : 0;
        
        return (
          <SwiperSlide key={index + "slideLogin"}>
            <div className={classes.slideItem}>
              <Fade in={true}>
              <img
                src={item.image}
                alt={item.description.title}
                className={classes.imageSlide}
              />
              </Fade>
              <div className={classes.slideFooter}>
                <div className={classes.footerSlide}>
                  <div className={classes.titleSlide}>
                    {item.description.title}
                  </div>
                  <div className={classes.textContent}>
                    {item.description.content}
                  </div>
                  {item.description?.rating && (
                    <div className={classes.ratingView}>
                      <StartRating 
                        numberOfStars={5}
                        rating={parseFloat(item.description?.rating)}
                        name='rating'
                        starDimension={"24px"}
                        // starSpacing="-20px"
                        starRatedColor="red"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SlideLoginPage;
