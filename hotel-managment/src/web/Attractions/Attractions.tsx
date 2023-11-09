import React from 'react';
import './Attractions.css'
import { Button, DatePicker, Input } from 'antd';

const Attractions = () => {

  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  return (
    <div className='Attractions'>
      <header>
        <div>
          <h1>Địa điểm tham quan, hoạt <br />
            động và trải nghiệm</h1>
          <h3>Khám phá các hoạt động và địa điểm tham quan mới theo <br />
            sở thích và gu du lịch của bạn</h3>

          <div className='search'>
            <Input className='input-search_Attractions' placeholder="Bạn muốn đi đâu???" />
            <DatePicker className='input-search_Attractions' onChange={onChange} />
            <Button className='button-search' type="primary">Tìm</Button>
          </div>
        </div>
      </header>

      <div className='content-web'>

      </div>

    </div>
  )
}

export default Attractions