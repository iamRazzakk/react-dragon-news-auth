const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../components/Layout/Layout");
const { default: Home } = require("../Pages/Home/Home");

const routes = createBrowserRouter([
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
export default routes