import React from 'react';
import './Form.css';

const Form = () => {
    const submitFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <div className='Form'>
            <div>
                <div>
                    <header>
                        <h1>Booking.vn</h1>
                    </header>

                    <form onSubmit={submitFormLogin}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder='email@gmail.com'
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder='******'
                            />
                        </div>
                        <div>Quên mật khẩu???</div>
                        <button>Đăng nhập</button>
                    </form>
                </div>

                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default Form