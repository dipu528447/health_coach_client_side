import {
  createBrowserRouter,
} from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import MyReview from "../Components/MyReview/MyReview";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Registration from "../Components/Registration/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader:  async () => {
            return fetch('http://localhost:5000');
          }, 
        },
        {
          path: "/services",
          element: <Home/>,
          loader:  async () => {
            return fetch('http://localhost:5000/showall');
          }, 
        },
        {
            path: "/blogs",
            element: <Blogs/>, 
        },
        {
            path: "/myreview",
            element: <PrivateRoute><MyReview/></PrivateRoute>, 
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