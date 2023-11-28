import React, { useContext, useEffect, useState } from 'react';
import wifi from '../../images/wifi.png';
import parking from '../../images/parking.png';
import swimming from '../../images/swimming.png';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { differenceInDays } from 'date-fns';

import DetailRoomModal from '../../components/Modal/DetailRoomModal';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { createBooking } from '../../apis/booking';
import { MessageContextProvider } from '../../contexts/MessageContext';

interface IUser {
    avatar?: string
    first_name?: string
    last_name?: string
    mobile?: string
    sex?: string
    cmnd?: string
    role: string
    address?: string
    email: string
    password: string
}
export interface IData {
    name: string,
    description: string,
    discount: string,
    received_date: string,
    pay_day: string,
    count_user: number,
    status: boolean,
    room_id: number,
    hotel_id: number,
    users: IUser[]
}

const Detail = () => {

    const auth = useContext(AuthContextProvider)
    const user = auth?.userState.user

    const mess = useContext(MessageContextProvider);
    const success = mess?.success
    const warning = mess?.warning

    const location = useLocation();
    const { state } = location;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [userReq, setUserReq] = useState<IUser>({
        avatar: "",
        first_name: "",
        last_name: "",
        mobile: "",
        sex: "",
        cmnd: "",
        role: "user",
        address: "",
        email: "",
        password: "user",
    })

    const [data, setData] = useState<IData>({
        name: `booking-${state.name}`,
        description: "",
        discount: "30%",
        received_date: "",
        pay_day: "",
        count_user: 0,
        status: false,
        room_id: state.room_id,
        hotel_id: state.hotel_id | 1,
        users: [
            {
                ...userReq
            }
        ]
    })



    useEffect(() => {
        if (user) {
            setUserReq({
                ...userReq,
                ...user
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    useEffect(() => {
        setData({
            ...data,
            users: [
                userReq
            ]
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userReq])

    const changPrames = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserReq({
            ...userReq,
            [e.target.name]: e.target.value
        })
    }

    const sumTime = () => {
        if (data.received_date !== '' && data.pay_day !== "") {
            const received_date = new Date(data.received_date);
            const pay_day = new Date(data.pay_day);
            return differenceInDays(pay_day, received_date);
        }
        return 1
    }


    const onsubmit = async (e: any) => {
        e.preventDefault();
        console.log(userReq)
        console.log(data)
        if (
            data.received_date === '' || data.pay_day === '' || data.count_user === 0
            || data.users[0].first_name === '' || data.users[0].last_name === ''
            || data.users[0].mobile === '' || data.users[0].cmnd === '' ||
            data.users[0].email === '' || data.users[0].address === ''
        ) {
            warning("Vui lòng nhập đầy đủ thông tin!!!!")
        }
        else {
            const res = await createBooking(data)
            if (res?.status === "200") {
                success("Xác nhận thông tin đặt phòng thành công!!!!")
            }
        }

    }

    return (
        <div className='content-web Detail'>
            <div className='reservation_information'>
                <div className='name-reservation_information'>
                    <h3>{state.name}</h3>
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
                        <div className='title-detail-reservation_information'>
                            <h3>Chi tiết đặt phòng của bạn</h3>
                            <span
                                onClick={() => { setIsModalOpen(true) }}
                            >sửa</span>
                        </div>
                        <div className='time_detail-DRI'>
                            <div>
                                <span>Nhận phòng</span>
                                <span>{data.received_date !== "" ? data.received_date : "Lựa chọn"}</span>
                                <span>14:00 – 22:00</span>
                            </div>
                            <div className='line-sevice-nameRI'></div>
                            <div>
                                <span>Trả phòng</span>
                                <span>{data.pay_day !== "" ? data.pay_day : 'Lựa chọn'}</span>
                                <span>09:00 – 12:00</span>
                            </div>
                        </div>

                        <div className='sum_time-DRI'>
                            <p>Tổng thời gian lưu trú:</p>
                            <p>{data.received_date === "" ? "Lựa chọn" : `${sumTime()} đêm`}</p>
                        </div>

                        <div className='option-DRI'>
                            <p> Bạn đã chọn</p>
                            <p>{data.count_user === 0 ? "Lựa chọn" : `phòng cho ${data.count_user} người`}</p>
                        </div>
                    </div>
                </div>
                <div className='price-reservation_information'>
                    <h3>Tóm tắt giá</h3>
                    <div className='detail_price-PRI'>
                        <span>Giá gốc</span>
                        <span>VND {state.price}</span>
                    </div>
                    <div className='detail_price-PRI'>
                        <span>Giảm giá</span>
                        <span>- VND {state.price / 100 * 30}</span>
                    </div>
                    <div className='sum_price-PRI'>
                        <span>Tổng cộng</span>
                        <div>
                            <span>VND {state.price * sumTime()}</span>
                            <span>VND {state.price * sumTime() / 100 * 70}</span>
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
                                value={userReq.first_name || undefined}
                                onChange={changPrames}
                                placeholder='Nguyen Van'
                            />
                        </div>
                        <div className='last_name'>
                            <label htmlFor="last_name">Tên của bạn</label>
                            <input
                                type="text"
                                id='last_name'
                                name='last_name'
                                value={userReq.last_name || undefined}
                                onChange={changPrames}
                                placeholder='An'
                            />
                        </div>
                    </div>
                    <div className='name'>
                        <div className='email'>
                            <label htmlFor="email">Địa chỉ email</label>
                            <input
                                type="text"
                                id='email'
                                name='email'
                                onChange={changPrames}
                                value={userReq.email || undefined}
                                placeholder='email@gmail.com'
                            />
                        </div>
                        <div className='cmnd'>
                            <label htmlFor="cmnd">CMND</label>
                            <input
                                type="text"
                                id='cmnd'
                                name='cmnd'
                                onChange={changPrames}
                                value={userReq.cmnd || undefined}
                                placeholder=''
                            />
                        </div>
                    </div>
                    <div className='address'>
                        <label htmlFor="address">Vùng/quốc gia</label>
                        <input
                            type="text"
                            id='address'
                            name='address'
                            onChange={changPrames}
                            value={userReq.address || undefined}
                            placeholder='Viet Nam'
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Điện thoại (ưu tiên số ĐTDĐ) </label>
                        <input
                            type="text"
                            id='mobile'
                            name='mobile'
                            onChange={changPrames}
                            value={userReq.mobile || undefined}
                            placeholder='mobile'
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
            {isModalOpen ?
                <DetailRoomModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    setData={setData}
                    data={data}
                />
                : <></>}
        </div>
    )
}

export default Detail