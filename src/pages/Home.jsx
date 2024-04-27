import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";

const Home = () => {
  return (
    <div className=" m-0 p-0">
      <Helmet>
        <title> Travel Trek | Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
