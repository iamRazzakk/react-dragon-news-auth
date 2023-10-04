import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZoon1 from '../../../../public/assets/qZone1.png'
import qZoon2 from '../../../../public/assets/qZone2.png'
import qZoon3 from '../../../../public/assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className="px-4 space-y-3 mb-6">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn w-full btn-outline">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </button>
                <button className="btn w-full btn-outline">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="px-4 mb-6">
                <h2 className="text-2xl mb-4">Find Us On</h2>
                <a className="p-4 flex items-center gap-3 border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook><span>Facebook</span>
                </a>
                <a className="p-4 flex items-center gap-3 border " href="">
                    <FaInstagram></FaInstagram><span>Instagram</span>
                </a>
                <a className="p-4 flex items-center gap-3 border-x rounded-b-lg" href="">
                    <FaTwitter></FaTwitter><span>Twitter</span>
                </a>
            </div>
            {/* Queee zoon */}

            <div className="px-4 space-y-3 mb-6 border-r-gray-600">
                <h2 className="text-2xl mb-4">Q Zoon</h2>
                <img src={qZoon1} alt="" />
                <img src={qZoon2} alt="" />
                <img src={qZoon3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;