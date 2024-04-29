import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
  const updateMyLocation = useLoaderData();
  const { tourists_spot_name, country_Name, average_cost, totalVisitorsPerYear, location, seasonality, image, travel_time, short_description } = updateMyLocation;

  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10">
    <Helmet>
    <title> Travel Trek | {tourists_spot_name}</title>
  </Helmet>
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl">
        <div>
          <img className="w-full rounded-lg" src={image} alt={tourists_spot_name} />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <CiLocationOn />
            <span className="text-sm text-black ml-1">{location}</span>
          </div>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-4 py-2 mt-3 font-bold rounded bg-[#ff8900] text-white"
          >
            {country_Name}
          </a>
        </div>
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-2xl font-bold hover:underline"
          >
            {tourists_spot_name}
          </a>
          <div className="mt-2" style={{ maxHeight: "200px", overflowY: "auto" }}>
            <p>{short_description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Average Cost</th>
                  <th>Seasonality</th>
                  <th>Visitors Every Year</th>
                  <th>Travel Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{average_cost}</td>
                  <td>{seasonality}</td>
                  <td>{totalVisitorsPerYear}</td>
                  <td>{travel_time}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center"
            >
              <img
                src="https://source.unsplash.com/50x50/?portrait"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
              />
              <span className="hover:underline text-gray-400">
                Leroy Jenkins
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
