import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
import SingleCard from "../Pages/SingleCard/SingleCard";



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
           {
            path:"/cards/:id",
            element:<SingleCard/>,
            loader: () => fetch('/donation.json')
           }
    ]
    }
])

export default myRouter;