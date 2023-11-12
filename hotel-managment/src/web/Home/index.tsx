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

            <div className='content-web'>

                {/* <div className='slide'>
                    <img src="https://hoteliris.vn/media/1322/dl12.jpg" alt="" />
                </div> */}

                <div className='introduction'>
                    <div className='column-introduction'>
                        <p className='title'>Phòng trong khách sạn</p>
                        <div><img src="https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg" alt="" /></div>
                        <p className='desc'>Phòng khách sạn, nơi bạn có thể tận hưởng sự thoải mái
                            và tiện nghi sau một ngày dài khám phá. Thiết kế sang trọng, đầy đủ tiện
                            lợi và dịch vụ chăm sóc khách hàng tận tâm, phòng khách sạn là điểm dừng
                            lý tưởng cho những chuyến du lịch đáng nhớ.</p>
                        <Button className='button'>Xem thêm</Button>
                    </div>

                    <div className='column-introduction'>
                        <p className='title'>Hệ thống nhà hàng</p>
                        <div><img src="https://dhtgroup.vn/admin/webroot/upload/image/images/324506988_608070484460859_2948609452841327780_n.jpg" alt="" /></div>
                        <p className='desc'>Hệ thống nhà hàng là một nền tảng hoặc mô hình kinh doanh quản
                            lý nhiều nhà hàng từ một vị trí trung tâm. Nó cung cấp giải pháp tổ chức, quản lý
                            đặt bàn, theo dõi kho, và các hoạt động khác liên quan đến quản lý nhà hàng. Hệ thống
                            này thường bao gồm các tính năng như đặt chỗ trực tuyến, thanh toán điện tử, theo dõi
                            doanh số bán hàng, và tối ưu hóa quy trình làm việc.</p>
                        <Button className='button'>Xem thêm</Button>
                    </div>

                    <div className='column-introduction'>
                        <p className='title'>Khu nghỉ dưỡng</p>
                        <div><img src="https://www.hancorp.com.vn/wp-content/uploads/2021/10/thiet-ke-resort-11.jpg" alt="" /></div>
                        <p className='desc'>Phòng khách sạn, nơi bạn có thể tận hưởng sự thoải mái
                            và tiện nghi sau một ngày dài khám phá. Thiết kế sang trọng, đầy đủ tiện
                            lợi và dịch vụ chăm sóc khách hàng tận tâm, phòng khách sạn là điểm dừng
                            lý tưởng cho những chuyến du lịch đáng nhớ.</p>
                        <Button className='button'>Xem thêm</Button>
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