import { IoAddCircleSharp } from "react-icons/io5";
const AddTouristSpot = () => {
  return (
    <div>
      <section className="p-6 text-black">
        <form
          noValidate=""
          action=""
          className=" flex flex-col mx-auto space-y-12"
        >
          <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
            {/* Heading */}
            <div className="mt-5 mb-8 flex  justify-center">
            <div className="text-3xl mt-1 text-[#FF8900]"><IoAddCircleSharp /></div>
            <div> <p className="text-center text-3xl font-bold">
                 Add Your Tourist Spot
              </p></div>
            
             
            </div>
            {/* form */}
            <form>
              <div className="flex gap-8 ">
                <div className="flex-1">
                  <label className="block mb-2 dark:text-white" htmlFor="name">
                  Tourists Spot Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder="Tourists Spot Name"
                    id="tourists_spot_name"
                    name="tourists_spot_name"
                  />

                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="country_Name"
                  >
                    Country Name
                  </label>
                  <select
                    name="country_Name"
                    id="country_Name"
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder="Select Country Name"
                  >
                    <option value="" selected>
                      Select Country
                    </option>
                    <option value="Bangladesh" >
                      Bangladesh
                    </option>
                    <option value="Thailand" >
                    Thailand
                    </option>
                    <option value="Indonesia" >
                      Indonesia
                    </option>
                    <option value="Malaysia" >
                      Malaysia
                    </option>
                    <option value="Vietnam" >
                      Vietnam
                    </option>
                    <option value="Cambodia" >
                      Cambodia
                    </option>
                  </select>

                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="average_cost"
                  >
                    Average Cost
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder="Enter Average Cost"
                    id="average_cost"
                    name="average_cost"
                  />
                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="totaVisitorsPerYear"
                  >
                   Total Visitors Per Year
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder="Enter Total Visitors Per Year"
                    id="totaVisitorsPerYear"
                    name="totalVisitorsPerYear"
                  />
                </div>
                {/* Right side */}
                <div className="flex-1">
                  <label className="block mb-2 dark:text-white" htmlFor="image">
                    Image
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder="Enter Image URL"
                    id="image"
                    name="image"
                  />
                  <label
                    className="block mb-2 mt-4 dark:text-white"
                    htmlFor="type"
                  >
                    Location
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder="Enter Location"
                    id="location"
                    name="location"
                  />

                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="seasonality"
                  >
                    Seasonality
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    maxLength={5}
                    max={5}
                    min={0}
                    type="number"
                    placeholder=" (Like Summer/Winter)"
                    id="seasonality"
                    name="seasonality"
                  />
                   <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="travel_time"
                  >
                    Travel Time
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                    type="text"
                    placeholder=" Like 7 Days"
                    id="travel_time"
                    name="travel_time"
                  />
                </div>
              </div>
              <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="travel_time"
                  >
                    Short Description
                  </label>
              <textarea id="description" name="short_description" rows="7" placeholder="short description" className="w-full rounded-md  focus:outline-[#FF8900] text-black  border p-3 "></textarea>
              <input
                className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ff9811]  bg-[#FF8900] duration-200 text-white cursor-pointer font-semibold"
                type="submit"
                value="Add Tourist Spot"
              />
            </form>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;
