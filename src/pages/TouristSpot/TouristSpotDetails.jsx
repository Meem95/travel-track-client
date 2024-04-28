import {  CiLocationOn } from "react-icons/ci";
const TouristSpotDetails = () => {
   // const { _id } = useParams();
    //const locationDetails = useLoaderData();
    //const locationId = parseInt(_id)
    //console.log(locationDetails)
   // console.log("id is",_id)
    // const bk = locationDetails.find((bk) => bk.id === locationId);
    // console.log(bk)
  return (
    <div>
      <div className="min-h-screen max-w-7xl mx-auto text-black my-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl ">
        <div>
            <img className="w-full  rounded-lg" src="https://i.ibb.co/LN3gkDm/sylhet-4296348-640.jpg"/>
        </div>
          <div className="flex items-center justify-between">
          <div> <div className="flex "><CiLocationOn /> 
            <span className="text-sm text-black">Jun 1, 2020</span></div></div>
         
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-4 py-2 mt-3 font-bold rounded bg-[#ff8900] text-white"
            >
              Bangladesh
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Sundorban
            </a>
            <p className="mt-2">
              
Sundarbans, a UNESCO World Heritage Site, is the largest mangrove forest in the world, spanning across Bangladesh and India. Its unique ecosystem supports a diverse range of flora and fauna, including the iconic Royal Bengal Tiger. Sundarbans plays a crucial role in protecting coastal areas from natural disasters and serves as a vital habitat for numerous endangered species.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Average Cost</th>
        <th>Seasonality</th>
        <th>Visitors Every Year</th>
        <th>travel_time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr >
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
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
    </div>
  );
};

export default TouristSpotDetails;
