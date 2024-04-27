
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Slider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      };
  return (
    <div className="w-full">
<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><img className='bg-no-repeat bg-cover w-full mySwiper' src="https://i.ibb.co/GQ5Tb2p/maya-bay-phi-phi.webp"/></SwiperSlide>
        <SwiperSlide><img className='bg-no-repeat bg-cover w-full' src="https://i.ibb.co/kXLVKbm/Cambodia-2638-B-Angkor-Wat.jpg"/></SwiperSlide>
        <SwiperSlide><img className='bg-no-repeat bg-cover w-full' src="https://i.ibb.co/553pBr3/11-travel-halong-vietnam-1.webp"/></SwiperSlide>
        <SwiperSlide><img className='bg-no-repeat bg-cover w-full' src="https://i.ibb.co/r2hRGHj/Malaysia-Inspiring-Wit-20160419-1042.webp"/></SwiperSlide>
        <SwiperSlide><img className='bg-no-repeat bg-cover w-full' src="https://i.ibb.co/pywFn16/bali-island-1200-x-800-wallpaper-p19drdtpfwj5ekel.jpg"/></SwiperSlide>
        <SwiperSlide><img className='bg-no-repeat bg-cover w-full' src="https://i.ibb.co/8dQYW1s/1200px-Sajek-Valley-Rangamati-2.jpg"/></SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Slider;
