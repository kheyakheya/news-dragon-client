import {
    Navigate,
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRout from "./PrivateRout";
import Terms from "../Pages/Shared/Terms/Terms";
  
  
const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/8'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]


    },
    
    {
    
    path:'category',
    element:<Main></Main>,
    children:[
        {
            path: ':id',
            element:<Category></Category>,
            loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        },
        
    ]
},
{
    path: '/news',
    element:<NewsLayout></NewsLayout>,
    children:[
        {
            path:':id',
            element:<PrivateRout><News></News></PrivateRout>,
            loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
}
])
export default router;