import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";


const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
            path: '/',
            element:<Home/>,
            loader: () => fetch('/donation.json')
           },
            {
            path: '/donation',
            element:<Donation/>
           },
            {
            path: '/statistics',
            element:<Statistics/>
           },
    ]
    }
])

export default myRouter;