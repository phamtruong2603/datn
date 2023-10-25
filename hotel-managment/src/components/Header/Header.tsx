import './Header.css';
import iconVN from '../../images/vietnam.png';
import iconQuestion from '../../images/question.svg';

const Header = () => {
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
          <span>Đăng ký</span>
          <span>Đăng nhập</span>
        </div>
      </div>
    </div>
  )
}

export default Header