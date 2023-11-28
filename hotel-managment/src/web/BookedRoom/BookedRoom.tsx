import React, { useContext, useState } from 'react';
import './BookedRoom.css'
import ListBookerRoom from './ListBookerRoom';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { Button } from 'antd';
import { getBookingByEmail } from '../../apis/booking';
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
interface IData {
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

const BookedRoom = () => {

    const [data, setData] = useState<IData[] | []>([])

    const [email, setEmail] = useState<{ email: string } | null>(null)

    const [check, setCheck] = useState<boolean>(false)

    const mess = useContext(MessageContextProvider);
    const warning = mess?.warning

    const changPrames = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail({
            email: e.target.value
        })
    }

    const search = async() => {
        if(email !== null) {
            const res = await getBookingByEmail(email)
            console.log(res)
            setData([])
            setCheck(true)
        } 
        else {
            warning("Vui lòng nhập email để tìm kiếm")
        }
    }

    const auth = useContext(AuthContextProvider);
    const user = auth?.userState


    return (

        <div className='content-web BookedRoom'>
            <div className='title-BookedRoom'>
                <h2>Danh sách phòng đã xác nhận của bạn</h2>
                <Button type='default' >Phòng đã hủy</Button>
            </div>
            {
                user?.isLogin ?
                    <div className='content-bookedRoom'>
                        <div className='content-web'>
                        {
                                data.length === 0 ?
                                    <>
                                        <p className='not_found-BookedRoom'>Danh sách của bạn trống</p>
                                    </>
                                    :
                                    data.map(() => {
                                        return (
                                            <></>
                                        )
                                    })
                            }
                        </div>
                    </div>
                    :
                    <div className='content-bookedRoom'>
                        <div>
                            {
                                check === false ?
                                    <div className='search_by_email1'>
                                        <input
                                            onChange={changPrames}
                                            type="text"
                                            name='email'
                                            placeholder='Nhập email của bạn'
                                        />
                                        <Button onClick={search} type='primary' ghost>Tìm Kiếm</Button>

                                        <p>Đăng nhập hoặc nhập email của bạn để xem danh sách phòng bạn đã xác nhận</p>
                                    </div>
                                    :
                                    <div className='search_by_email2'>
                                        <input
                                            onChange={changPrames}
                                            type="text"
                                            name='email'
                                            placeholder='Nhập email của bạn'
                                        />
                                        <Button onClick={search} type='primary' ghost>Tìm Kiếm</Button>
                                    </div>
                            }
                        </div>

                        <div>
                            {
                                data.length === 0 && check === true ?
                                    <>
                                        <p className='not_found-BookedRoom'>Danh sách của bạn trống</p>
                                    </>
                                    :
                                    data.map(() => {
                                        return (
                                            <ListBookerRoom
                                                id={1}
                                                name={""}
                                                status={true}
                                                price={45}
                                                max_user={2}
                                                description={""}
                                                hotel_id={1}
                                                img={""}
                                            />
                                        )
                                    })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default BookedRoom