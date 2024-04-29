// import { TbEdit } from "react-icons/tb";
// import { MdDeleteSweep } from "react-icons/md";
import {  useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Mylist from "./Mylist";
import { AuthContext } from "../../providers/AuthProvider";



const MyLists = () => {
    //const mylists = useLoaderData();
   

  //  const [ MyList,setMyList] =useState(mylists)
//
    //const { user } = useContext(AuthContext);
    const { user } =  useContext(AuthContext) || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myLocation/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
    
  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10 shadow-2xl p-5">
      <div className="overflow-x-auto">
      {
        !user? <p>no data found</p>
        :
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Country</th>
              <th> Average Cost</th>
              <th> Seasonality</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
          


            {
                item.map((list , index)=> <Mylist
            key={list._id}
            list={list}
            listData={list}
           // setMyList={setMyList}
            index={index + 1}
            ></Mylist>)
        }
           
           
          </tbody>
        </table>
      }
        
      </div>
    </div>
  );
};

export default MyLists;
