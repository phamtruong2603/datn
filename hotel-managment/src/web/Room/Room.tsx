import React, { useEffect, useState } from 'react';
import './Room.css';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getAllRoom, searchRoom } from '../../apis/room';

import Introduce from './Introduce';
import { Room as typeRoom } from '../../types/room';

interface IData {
  name?: string 
  category?: string 
}


const Room = () => {

  const [data, setData] = useState<IData>({})


  const [rooms, setRoom] = useState<typeRoom[]>()

  const changePrames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onclick = async () => {
    console.log(data)
    const res = await searchRoom(data)
    if(res?.data) {
      setRoom(res?.data)
    }
  }

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
            <Input
              onChange={changePrames}
              name='name'
              className='input-search'
              placeholder="Nhập tên phòng..."
              prefix={<UserOutlined />}
            />
            <Input
              onChange={changePrames}
              name='category'
              className='input-search'
              placeholder="Loại phòng mong muốn..."
              prefix={<UserOutlined />}
            />
            <Button className='button-search' type="primary" onClick={onclick}>Tìm</Button>
          </div>
        </div>
      </header>

      <div className='content_room content-web'>
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