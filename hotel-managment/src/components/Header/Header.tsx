import './Header.css';
import iconVN from '../../images/vietnam.png';
import iconQuestion from '../../images/question.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const navigateLoginForm = (e: any) => {
    e.preventDefault();
    navigate('/login')
};

  return (
    <div className='header'>
      <div className='logo'>Booking.vn</div>
      <div className='header-right'>
        <div className='option_main'>
          <span>VND</span>
          <span className='icon-language'><img src={iconVN} alt="" /></span>
          <span className='icon-question'><img src={iconQuestion} alt="" /></span>
        </div>

        <div className='auth'>
          <span onClick={navigateLoginForm}>Đăng nhập</span>
          <span>Đăng ký</span>
        </div>
      </div>
    </div>
  )
}

export default Header