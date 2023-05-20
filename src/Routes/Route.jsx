import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Details from "../Pages/Home/Details/Details";
import Alltoys from "../Pages/AllToys/Alltoys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3500/carToys")
      },
      {
        path: "categories/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:3500/carToys/${params.id}`)
      },
      {
        path: "/allToys",
        element: <Alltoys></Alltoys>,
        loader: () => fetch("http://localhost:3500/carToys")
      },
      {
        path: "/alltoys/:id",
        element:<Details></Details>,
        loader:({params}) => fetch(`http://localhost:3500/carToys/${params.id}`)
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
      }
    ]
  },
]);

export default router;