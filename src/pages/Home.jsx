import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Gallery from "./Home/Gallery";
import Review from "./Home/Review";
import TouristSpot from "./Home/TouristSpot";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const touristSpots = useLoaderData();
  const sixTouristSpots = touristSpots.slice(0, 6);
  console.log(sixTouristSpots);

  return (
    <div className=" m-0 p-0">
      <Helmet>
        <title> Travel Trek | Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
      <div className="min-h-screen max-w-7xl mx-auto">
        <section className="py-6 sm:py-12 ">
          <div className=" p-6 mx-auto space-y-5">
            <div className="my-6 animate__animated animate__bounce">
              <h2 className="text-5xl text-center font-bold ">
                Tourists Spots
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {sixTouristSpots.map((touristSpot) => (
                <TouristSpot
                  key={touristSpot.id}
                  cards={touristSpot}
                ></TouristSpot>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
      <div>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
