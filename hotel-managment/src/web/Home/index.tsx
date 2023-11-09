import React from 'react';
import './Home.css';
import { Button, DatePicker, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import CardBasic from '../../components/Card/CardBasic';

const { RangePicker } = DatePicker;

const Home = () => {
    return (
        <div className='Home'>
            <header>
                <div>
                    <h1>Tìm chỗ nghỉ tiếp theo</h1>
                    <h3>Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...</h3>

                    <div className='search'>
                        <Input className='input-search' placeholder="Bạn muốn đến đâu???" prefix={<UserOutlined />} />
                        <RangePicker className='input-search' />
                        <Input className='input-search' placeholder="large size" prefix={<UserOutlined />} />
                        <Button className='button-search' type="primary">Tìm</Button>
                    </div>
                </div>
            </header>

            <div className='content-web'>

                <div className='offers'>
                    <div>
                        <div>
                            <div className='content_offers'>
                                <h2>Đăng nhập để nhận ưu đãi</h2>
                                <p>Giảm 10% các dịch vụ khi bạn đăng nhập</p>
                            </div>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <Button type='primary'>Đăng nhập</Button>
                    </div>

                    <div>
                        <div className='content_offers'>
                            <h2>Đăng nhập để nhận ưu đãi</h2>
                            <p>Giảm 10% các dịch vụ khi bạn đăng nhập</p>
                        </div>
                    </div>
                </div>

                <div className='popular_location'>
                    <h2>Điểm đến đang thịnh hành</h2>
                    <p>Các lựa chọn phổ biến nhất cho du khách từ Việt Nam</p>

                    <div className='location'>
                        <CardBasic
                            title='Đà Nẵng'
                            height='240px'
                            width='48%'
                            src='https://cf2.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o='
                            top={true}
                        />
                        <CardBasic
                            title='TP. Hồ Chí Minh'
                            height='240px'
                            width='48%'
                            src='https://cf2.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o='
                            top={true}
                        />
                        <CardBasic
                            title='Hà Nội'
                            height='240px'
                            width='32%'
                            src='https://cf2.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o='
                            top={true}
                        />
                        <CardBasic
                            title='Đà Lạt'
                            height='240px'
                            width='32%'
                            src='https://cf2.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o='
                            top={true}
                        />
                        <CardBasic
                            title='Vũng Tàu'
                            height='240px'
                            width='32%'
                            src='https://cf2.bstatic.com/xdata/images/city/600x600/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o='
                            top={true}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home