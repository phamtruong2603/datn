import React, { useEffect, useState } from 'react';
import './Room.css';
import { Button, DatePicker, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getAllRoom } from '../../apis/room';

import Introduce from './Introduce';
import { Room as typeRoom } from '../../types/room';

const { RangePicker } = DatePicker;

const Room = () => {

  const [rooms, setRoom] = useState<typeRoom[]>()
  console.log(rooms)

  useEffect(() => {
    (async () => {
      const res = await getAllRoom();
      setRoom(res?.data)
    })()
  }, [])


  return (
    <div className='Home'>
      <header>
        <div>
          <h1>Giới thiệu về khách sạn</h1>
          <h3>Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...</h3>
          <br />
          <Button>{`Xem phòng -->`}</Button>

          <div className='search'>
            <Input className='input-search' placeholder="Bạn muốn ở đâu???" prefix={<UserOutlined />} />
            <RangePicker className='input-search' />
            <Input className='input-search' placeholder="large size" prefix={<UserOutlined />} />
            <Button className='button-search' type="primary">Tìm</Button>
          </div>
        </div>
      </header>

      <div className='content_room content-web'>
        <div className='sidebar-content_room'>
          Lua chon
        </div>

        <div className='list-content_room'>
          {
            rooms && rooms.map((room) => {
              return (
                <Introduce
                  id={room.id}
                  name={room.name}
                  status={room.status}
                  price={room.price}
                  max_user={room.max_user}
                  description={room.description}
                  hotel_id={room.hotel_id}
                  img={room.img}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Room