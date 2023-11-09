import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-link'>
        <Link to={"/"}>Lưu trú</Link>
        <Link to={"/attractions"}>Địa điểm tham quan</Link>
        <Link to={"/"}>Thuê xe</Link>
        <Link to={"/"}>Thông tin</Link>
        <Link to={"/about"}>Thông tin</Link>
      </nav>
    </div>
  )
}

export default Navbar