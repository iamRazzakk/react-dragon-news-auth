import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreackingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breacking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened !.....</Link>
                <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened !.....</Link>
                <Link mr-12>Match Highlights: Germany vs Spain — as it happened !.....</Link>
                <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened !.....</Link>
            </Marquee>
        </div>
    );
};

export default BreackingNews;