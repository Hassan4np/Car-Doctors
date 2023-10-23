import { createBrowserRouter} from "react-router-dom";
import Home from "../Page/Home";
import Mainpage from "../Mainpage";
import Signup from "../Register/Signup";
import Login from "../Register/Login";
import Error from "../Page/Error";


  const Mybrowser = createBrowserRouter([
    {
      path: "/",
      element:<Mainpage></Mainpage>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);
  
  
 export{Mybrowser}