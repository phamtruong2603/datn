import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-link'>
        <Link to={"/"}>Khách sạn</Link>
        <Link to={"/rooms"}>Phòng thuê</Link>
        <Link to={"/attractions"}>Địa điểm tham quan</Link>
        <Link to={"/booked-room"}>Đã xác nhận</Link>
        <Link to={"/about"}>Thông tin</Link>
      </nav>
    </div>
  )
}

export default Navbar