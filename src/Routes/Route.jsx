import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Details from "../Pages/Home/Details/Details";
import Alltoys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import Update from "../Pages/Update/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://toy-car-wonderland-server.vercel.app/carToys")
      },
      {
        path: "categories/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-car-wonderland-server.vercel.app/carToys/${params.id}`)
      },
      {
        path: "/allToys",
        element: <Alltoys></Alltoys>,
        loader: () => fetch("https://toy-car-wonderland-server.vercel.app/carToys")
      },
      {
        path: "/alltoys/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params}) => fetch(`https://toy-car-wonderland-server.vercel.app/carToys/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path : "/addToys",
        element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path:"/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params}) => fetch(`https://toy-car-wonderland-server.vercel.app/update/${params.id}`)
      }
    ]
  },
]);

export default router;