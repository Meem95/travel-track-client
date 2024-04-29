import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import r1 from "../../assets/images/r1.png";
import r2 from "../../assets/images/r2.png";
import r3 from "../../assets/images/r3.png";
const Review = () => {
  return (
    <div className="max-w-3xl mx-auto ">
      <div>
        <h1 className="text-4xl text-center my-8 font-bold">
          What Our Customers Are Saying About Us
        </h1>
      </div>
      <div className="my-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <div className="testimonial-box bg-white rounded-lg shadow-md p-4 md:w-1/2 lg:w-11/12 mx-auto mb-4">
              <div className="box-top flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="profile flex items-center mb-2 md:mb-0">
                  <div className="profile-img mr-2">
                    <img src={r1} alt="Profile" />
                  </div>

                  <div className="name-user">
                    <strong>Liam Mendes</strong>
                    <p>@liammendes</p>
                    <div className="reviews flex ">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Comments Section */}
              <div className="client-comment">
                <p className="text-gray-600">
                  Absolutely thrilled with the service! From start to finish,
                  the team ensured every detail was handled with care. Highly
                  recommend!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-box bg-white rounded-lg shadow-md p-4 md:w-1/2 lg:w-11/12 w-11/12 mx-auto mb-4">
              <div className="box-top flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="profile flex items-center mb-2 md:mb-0">
                  <div className="profile-img mr-2">
                    <img src={r2} alt="Profile" />
                  </div>

                  <div className="name-user">
                    <strong>Liam Mendes</strong>
                    <p>@liammendes</p>
                    <div className="reviews flex">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                  </div>
                </div>
                {/* Reviews Section */}
              </div>
              {/* Comments Section */}
              <div className="client-comment">
                <p className="text-gray-600">
                  Exceptional experience! The professionalism and attention to
                  detail exceeded my expectations. Will definitely be returning.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-box bg-white rounded-lg shadow-md p-4 md:w-1/2 lg:w-11/12 w-11/12 mx-auto mb-4">
              <div className="box-top flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="profile flex items-center mb-2 md:mb-0">
                  <div className="profile-img mr-2">
                    <img src={r3} alt="Profile" />
                  </div>

                  <div className="name-user">
                    <strong>Liam Mendes</strong>
                    <p>@liammendes</p>
                    <div className="reviews flex">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="client-comment">
                <p className="text-gray-600">
                  Outstanding service! Prompt communication and top-notch
                  quality. Couldn't be happier with the results.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
