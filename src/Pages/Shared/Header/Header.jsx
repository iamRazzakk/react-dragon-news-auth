import moment from 'moment/moment';
import logo from '../../../../public/assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-5' src={logo} alt="" />
            <p className='text-xs mb-3'>Journalism Without Fear or Favour</p>
            <p className='text-xl'> {moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;