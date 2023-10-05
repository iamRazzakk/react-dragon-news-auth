
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsPage = (props) => {
    const { image_url, title, details } = props.location.state.news;
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <img src={image_url} alt="" />
                    <h1 className="text-2xl">{title}</h1>
                    <p>{details}</p>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsPage;