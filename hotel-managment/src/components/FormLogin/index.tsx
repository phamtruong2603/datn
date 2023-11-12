import React from 'react';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate()
    const submitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const navigateHome = async (e: any) => {
        e.preventDefault();
        navigate('/')
    };
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
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id='password'
                                type="password"
                                name='password'
                                placeholder='******'
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