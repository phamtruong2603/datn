import React from 'react';
import './Room.css';
import { Button, DatePicker, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Introduce from './Introduce';

const { RangePicker } = DatePicker;

const Room = () => {

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
          <Introduce
            id={1}
            name={''}
            status={true}
            price={10.0}
            max_user={4}
            description={''}
            hotel_id={1}
            img={''}
          />
        </div>
      </div>
    </div>
  )
}

export default Room