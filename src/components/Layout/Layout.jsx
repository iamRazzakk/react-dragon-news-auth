import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="max-w-6xl mx-auto font-displayFont">
            {/* <h1>hello world</h1> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;