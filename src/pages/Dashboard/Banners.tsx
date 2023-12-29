import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banners.css';

export default function Banners(){
    return <div className='Banners'>
       <Swiper
        spaceBetween={30}
        slidesPerView={4}
        >
            {
                [1,2,3,4,5].map(v=><SwiperSlide key={v}>
                    <div className='item'>Slide {v}</div>
                </SwiperSlide>)
            }
            
        </Swiper>
    </div>
}