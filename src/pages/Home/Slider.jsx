// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className="">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        
       
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/wgZDnPt/image1.webp')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Traveling – it leaves you speechless, then turns you into a storyteller.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/1MCw26K/Piaynemo-West-Papua.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            To travel is to take a journey into yourself.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/r2hRGHj/Malaysia-Inspiring-Wit-20160419-1042.webp')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            The journey of a thousand miles begins with a single step.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/pywFn16/bali-island-1200-x-800-wallpaper-p19drdtpfwj5ekel.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Travel makes one modest. You see what a tiny place you occupy in the world.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/8dQYW1s/1200px-Sajek-Valley-Rangamati-2.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Adventure is worthwhile
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/image.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            The world is a book, and those who do not travel read only one page
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
