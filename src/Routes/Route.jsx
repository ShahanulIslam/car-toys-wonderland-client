import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;