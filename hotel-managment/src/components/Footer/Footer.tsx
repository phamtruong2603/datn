import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='general_information'>
                <div className='column-footer'>
                    <p className='title'>Hỗ trợ</p>

                    <p>Các câu hỏi thường gặp</p>
                    <p>Quản lí các chuyến đi của<br />bạn</p>
                    <p>Trung tâm trợ giúp điểm<br />tham quan</p>
                </div>

                <div className='column-footer'>
                    <p className='title'>Khám phá thêm</p>

                    <p>Chương trình khách hàng<br />thân thiết Genius</p>
                    <p>Ưu đãi theo mùa và dịp lễ</p>
                    <p>Bài viết về du lịch</p>
                </div>

                <div className='column-footer'>
                    <p className='title'>Điều khoản và cài đặt</p>

                    <p>Bảo mật & Cookie</p>
                    <p>Điều khoản và điều kiện</p>
                </div>

                <div className='column-footer'>
                    <p className='title'>Dành cho bạn</p>

                    <p>Trợ giúp</p>
                    <p>Đăng nhập vào trang</p>
                    <p>Trở thành đối tác phân phối</p>
                </div>

                <div className='column-footer'>
                    <p className='title'>Về chúng tôi</p>

                    <p>Về Booking.vn</p>
                    <p>Truyền thông</p>
                    <p>Du lịch bền vững</p>
                    <p>Chúng tôi hoạt động như thế nào</p>
                    <p>Liên hệ công ty</p>
                </div>
            </div>

            <div className='version-web'><br />booking.vn - [Version v1.0]</div>
        </div>
    )
}

export default Footer