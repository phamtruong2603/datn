import React, { useContext, useState } from 'react';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';

import { AuthContextProvider } from '../../contexts/AuthContext';
import { MessageContextProvider } from '../../contexts/MessageContext';

interface IFormLogin {
    email: string | undefined
    password: string | undefined
}

const Form = () => {
    const auth = useContext(AuthContextProvider);
    const message = useContext(MessageContextProvider);
    const setUserState = auth?.setUserState
    const success = message?.success

    const [data, setData] = useState<IFormLogin>({
        email: undefined,
        password: undefined
    })

    const navigate = useNavigate()
    const submitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await login(data)
        if(res) {
            setUserState?.({
                isLogin: true,
                user: res.data,
                token: res.data.token
            })
            localStorage.setItem('token', res.data.token)
            success("Đăng nhập thành công")
            res.data.role === "user" ? 
            navigate('/')
            :
            navigate('/admin/statistical')
        }
    };

    const navigateHome = async (e: any) => {
        e.preventDefault();
        navigate('/')
    };

    const changeInfor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='Form'>
            <div>

                <div className='login-form'>
                    <h1 onClick={navigateHome}>Booking.vn</h1>
                    <form onSubmit={submitFormLogin}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                id='email'
                                type="email"
                                name='email'
                                placeholder='email@gmail.com'
                                onChange={changeInfor}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id='password'
                                type="password"
                                name='password'
                                placeholder='******'
                                onChange={changeInfor}
                            />
                        </div>
                        <span>Quên mật khẩu???</span>
                        <button>Đăng nhập</button>
                    </form>

                    <p>Bạn chưa có tài khoản <Link to='/register'>Đăng Ký</Link></p>
                </div>

                <div className='img-loginform'>
                    <img src="https://chv.com.vn/Thumb/Web/Resources/Uploaded/1/images/CHVTravel/KhachSan/DANANG/VinpearlCondotelRiverfrontDaNang/vinpearl-condotel-riverfront-da-nang-1_w570_h315_c.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Form