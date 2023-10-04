// const { createBrowserRouter } = require("react-router-dom");
import { createBrowserRouter } from "react-router-dom";
// import form {createBrowserRouter} "react-router-dom"
// const { default: Layout } = require("../components/Layout/Layout");
// const { default: Home } = require("../Pages/Home/Home");
import Layout from "../components/Layout/Layout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default router