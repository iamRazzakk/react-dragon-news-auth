// const { createBrowserRouter } = require("react-router-dom");
import { createBrowserRouter } from "react-router-dom";
// import form {createBrowserRouter} "react-router-dom"
// const { default: Layout } = require("../components/Layout/Layout");
// const { default: Home } = require("../Pages/Home/Home");
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from '../Pages/Register/Register'
import NewsCard from "../Pages/Shared/NewsCard/NewsCard";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivateRout from "./PrivateRout/PrivateRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRout><NewsPage></NewsPage></PrivateRout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])
export default router