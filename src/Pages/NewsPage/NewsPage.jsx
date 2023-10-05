import Home from "../Home/Home";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsPage = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <div className="grid grid-cols-4">
                <div className="col-span-3">

                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsPage;