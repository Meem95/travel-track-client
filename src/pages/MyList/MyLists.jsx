// import { TbEdit } from "react-icons/tb";
// import { MdDeleteSweep } from "react-icons/md";
import {  useLoaderData } from "react-router-dom";
import { useState } from "react";
import Mylist from "./Mylist";



const MyLists = () => {
    const mylists = useLoaderData();
    console.log('hbtftgvg',mylists);

    const [ MyList,setMyList] =useState(mylists)


    
  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10 shadow-2xl p-5">
      <div className="overflow-x-auto">
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
                mylists.map((list , index)=> <Mylist
            key={list._id}
            list={list}
            listData={MyList}
            setMyList={setMyList}
            index={index + 1}
            ></Mylist>)
        }
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLists;
