import React from 'react';
import room from '../../images/room.png';

const Room = () => {
  return (
    <div className='room'>
        <div className='title'>
            <img src={room} alt="" />
            <p>Phòng thuê</p>
        </div>
        <div>
            <p>Sử dụng: 10</p>
            <p>Còn trống: 3</p>
            <p>Sửa chữa: 7</p>
        </div>
    </div>
  )
}

export default Room