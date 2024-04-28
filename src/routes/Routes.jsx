import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTouristSpot from "../pages/TouristSpot/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";
import AllTouristSpots from "../pages/AllTouristSpots";
import TouristSpotDetails from "../pages/TouristSpot/TouristSpotDetails";
import MyLists from "../pages/MyList/MyLists";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
              //  loader:()=>fetch('http://localhost:5000/location'),
              loader: async () => {
                const [locationData, otherData] = await Promise.all([
                    fetch('http://localhost:5000/location').then(res => res.json()),
                    fetch('http://localhost:5000/country').then(res => res.json())
                ]);
                return { locationData, otherData };
            }
               
            },
            
            {
                path: '/add-tourist-spot',
                element:<PrivateRoute> <AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/tourist-spot-details/:id',
                element:<PrivateRoute> <TouristSpotDetails></TouristSpotDetails></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/location')

            },
            
            {
                path: '/my-list/',
                element:<PrivateRoute> <MyLists></MyLists></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/location')

            },
            
            {
                path: '/all-tourist-spot',
                element: <AllTouristSpots></AllTouristSpots>,
                loader:()=>fetch('http://localhost:5000/location')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
           
            {
              path: '*',
              element: <ErrorPage/>
            }
        ]
    }   

]) 
export default router;