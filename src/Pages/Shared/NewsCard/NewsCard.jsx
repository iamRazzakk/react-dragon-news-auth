import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div>
            <h4 className="text-2xl">
                {title}
            </h4>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 200)}<Link
                    to={`news/${_id}`}
                    className="text-blue-600 font-bold">Read More.....</Link></p> :
                    (
                        <p>{details}</p>
                    )
            }
        </div >
    );
};

export default NewsCard;