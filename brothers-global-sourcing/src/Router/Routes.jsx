import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Products from "../Pages/Products/Products";
import Factories from "../Pages/Factories/Factories";
import Sustainability from "../Pages/Sustainability/Sustainability";
import Contact from "../Pages/Contact/Contact";



const router = createBrowserRouter([
  {
    path: "/",
Component:App,
children:[
    {
        index:true,
        Component:Home,
    },
    {
      path:"/about",
      Component:About,
    },
    {
      path:"/services",
      Component:Services,
    },
    {
      path:"/products",
      Component:Products,
    },
    {
      path:"/factories",
      Component:Factories,
    },
    {
      path:"/sustainability",
      Component:Sustainability,
    },
    {
      path:"/contact",
      Component:Contact,
    },
]
  }

]);
export default router;