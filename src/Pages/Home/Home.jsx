import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import BreackingNews from "./BreackingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreackingNews></BreackingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h1>This is main Somithing is comming</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;