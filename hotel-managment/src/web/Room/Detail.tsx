import React from 'react';
import wifi from '../../images/wifi.png';
import parking from '../../images/parking.png';
import swimming from '../../images/swimming.png';

const Detail = () => {
    return (
        <div className='content-web'>
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
                            WiFi miễn phí
                        </div>
                        <div>
                            <div><img src={parking} alt="" /></div>
                            Chỗ đỗ xe
                        </div>
                        <div>
                            <div><img src={swimming} alt="" /></div>
                            Hồ bơi
                        </div>
                    </div>
                </div>
                <div className='detail-reservation_information'>

                </div>
                <div className='price-reservation_information'>

                </div>
            </div>

            <div className='customer_information'>

            </div>
        </div>
    )
}

export default Detail