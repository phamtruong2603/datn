import React, { useContext, useState } from 'react';
import wifi from '../../images/wifi.png';
import parking from '../../images/parking.png';
import swimming from '../../images/swimming.png';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';

import { AuthContextProvider } from '../../contexts/AuthContext';

const Detail = () => {

    const auth = useContext(AuthContextProvider)
    const user = auth?.userState

    const location = useLocation();
    const { state } = location;

    const [dataUser, setDataUser] = useState<any>()

    const changPrames = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }

    const onsubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault();
        console.log(dataUser)
    }

    return (
        <div className='content-web Detail'>
            <div className='reservation_information'>
                <div className='name-reservation_information'>
                    <h3>Phòng ngủ đôi Full Tiện Ich</h3>
                    <p style={{ margin: '0.5rem 0' }}>Địa chỉ: Thai Binh</p>
                    <div className='evaluate-nameRI'>
                        <span>8,3</span>
                        <span>rất tốt</span>
                        <span>4 đánh giá</span>
                    </div>

                    <div className='sevice-nameRI'>
                        <div>
                            <div><img src={wifi} alt="" /></div>
                            <span>WiFi miễn phí</span>
                        </div>

                        <div>
                            <div><img src={parking} alt="" /></div>
                            <span>Chỗ đỗ xe</span>
                        </div>
                        <div>
                            <div><img src={swimming} alt="" /></div>
                            <span>Hồ bơi</span>
                        </div>
                    </div>
                </div>
                <div className='detail-reservation_information'>
                    <div>
                        <h3>Chi tiết đặt phòng của bạn</h3>
                        <div className='time_detail-DRI'>
                            <div>
                                <span>Nhận phòng</span>
                                <span>CN, 12 tháng 11 <br />2023</span>
                                <span>14:00 – 22:00</span>
                            </div>
                            <div className='line-sevice-nameRI'></div>
                            <div>
                                <span>Trả phòng</span>
                                <span>T2, 13 tháng 11 <br />2023</span>
                                <span>09:00 – 12:00</span>
                            </div>
                        </div>

                        <div className='sum_time-DRI'>
                            <p>Tổng thời gian lưu trú:</p>
                            <p>1 đêm</p>
                        </div>

                        <div className='option-DRI'>
                            <p> Bạn đã chọn</p>
                            <p>2 phòng cho 2 người lớn</p>
                        </div>
                    </div>
                </div>
                <div className='price-reservation_information'>
                    <h3>Tóm tắt giá</h3>
                    <div className='detail_price-PRI'>
                        <span>Giá gốc</span>
                        <span>VND 1.620.000</span>
                    </div>
                    <div className='detail_price-PRI'>
                        <span>Giảm giá</span>
                        <span>- VND 486.000</span>
                    </div>
                    <div className='sum_price-PRI'>
                        <span>Tổng cộng</span>
                        <div>
                            <span>VND 1.620.000</span>
                            <span>VND 1.134.000</span>
                            <span>Đã bao gồm thuế và phí</span>
                        </div>
                    </div>

                    <div className='detail_discount-PRI'>
                        <h3>Thông tin giá</h3>
                        <div>
                            <p>Bạn nhận được giảm giá vì chỗ nghỉ này đang có ưu đãi.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='customer_information'>
                <h2>Nhập thông tin chi tiết của bạn</h2>

                <form onSubmit={onsubmit}>
                    <div className='name'>
                        <div className='first_name'>
                            <label htmlFor="first_name">Họ và tên đệm</label>
                            <input
                                type="text"
                                id='first_name'
                                name='first_name'
                                placeholder='Nguyen Van'
                                onChange={changPrames}
                            />
                        </div>
                        <div className='last_name'>
                            <label htmlFor="last_name">Tên của bạn</label>
                            <input
                                type="text"
                                id='last_name'
                                name='last_name'
                                placeholder='An'
                                onChange={changPrames}
                            />
                        </div>
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Địa chỉ email</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            placeholder='email@gmail.com'
                            onChange={changPrames}
                        />
                    </div>
                    <div className='country'>
                        <label htmlFor="country">Vùng/quốc gia</label>
                        <input
                            type="text"
                            id='country'
                            name='country'
                            placeholder='Viet Nam'
                            onChange={changPrames}
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Điện thoại (ưu tiên số ĐTDĐ) </label>
                        <input
                            type="text"
                            id='mobile'
                            name='mobile'
                            placeholder='mobile'
                            onChange={changPrames}
                        />
                    </div>
                </form>

                <div className='who_option'>
                    <h3>Bạn đặt phòng cho ai?</h3>
                    <div>
                        <input type="radio" />
                        <label htmlFor=""> Tôi là khách lưu trú chính</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor=""> Đặt phòng này là cho người khác</label>
                    </div>
                </div>

                <div className='special_requirements'>
                    <h3>Các Yêu Cầu Đặc Biệt</h3>
                    <span>Các yêu cầu đặc biệt không đảm bảo sẽ được đáp ứng – tuy nhiên, chỗ nghỉ
                        sẽ cố gắng hết sức để thực hiện. Bạn luôn có thể gửi yêu cầu đặc biệt sau
                        khi hoàn tất đặt phòng của mình!</span>
                    <span>Vui lòng ghi yêu cầu của bạn tại đây. (không bắt buộc)</span>
                    <textarea name="" id=""></textarea>
                </div>

                <div className='DetailRoomConfirm'>
                    <Button type='primary' onClick={onsubmit}>Xác nhận thông tin</Button>
                </div>

            </div>
        </div>
    )
}

export default Detail