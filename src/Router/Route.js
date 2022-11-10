import {
  createBrowserRouter,
} from "react-router-dom";
import AddService from "../Components/Addservice/AddService";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import MyReview from "../Components/MyReview/MyReview";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Registration from "../Components/Registration/Registration";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader:  async () => {
            return fetch('https://doctor-service-server-khaki.vercel.app');
          }, 
        },
        {
          path: "/services",
          element: <Home/>,
          loader:  async () => {
            return fetch('https://doctor-service-server-khaki.vercel.app/showall');
          }, 
        },
        {
          path: "/services/:id",
          element: <ServiceDetails/>,
          loader:  async ({params}) => 
      
            fetch(`https://doctor-service-server-khaki.vercel.app/services/${params.id}`) 
        },
        {
            path: "/blogs",
            element: <Blogs/>, 
        },
        {
            path: "/myreview/",
            element: <PrivateRoute><MyReview/></PrivateRoute>,
        },
        {
          path: "/addservice",
          element: <PrivateRoute><AddService/></PrivateRoute>, 
      },
      ],
    },
    {
        path:"/login",
        element:<Login></Login>,
    },
    {
        path:"/register",
        element:<Registration></Registration>
    },
    {
      path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1><p className="text-4xl">please go back...</p></div>
    }
  ]);