import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Gallery from "./Home/Gallery";
import Review from "./Home/Review";

const Home = () => {
  return (
    <div className=" m-0 p-0">
      <Helmet>
        <title> Travel Trek | Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
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
