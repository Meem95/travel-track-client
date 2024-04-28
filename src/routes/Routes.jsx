import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTouristSpot from "../pages/TouristSpot/AddTouristSpot";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
            },
            
            {
                path: '/add-tourist-spot',
                element: <AddTouristSpot></AddTouristSpot>
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