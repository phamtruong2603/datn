import React, { useState } from 'react'
import { Room } from '../../types/room'
import { Button } from 'antd'
import DeleteBookingModal from '../../components/Modal/DeleteBookingModal'

const ListBookerRoom: React.FC<Room> = ({
    id,
    name,
    status,
    price,
    max_user,
    description,
    hotel_id,
    img,
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='Introduce'>
            <div className='img-Introduce'>
                <img src="https://thietkehomexinh.com/wp-content/uploads/2017/04/noi-that-phong-ngu-tre-trung-hienj-dai-01.jpg" alt="" />
            </div>

            <div className='content-Introduce'>
                <h2>{name}</h2>
                <span>**************************************************</span>
                <p style={{ margin: '0.2rem 0' }}>Địa chỉ: Thai Binh</p>
                <span className='discount-content-Introduce'>Ưu Đãi Cuối Năm</span>
                <br /><br /><br />
                <div className='detail-content-Introduce'>
                    <p>Căn Hộ 2 Phòng Ngủ</p>
                    <p>1 căn hộ nguyên căn • 2 phòng ngủ • 1 phòng khách •<br />
                        1 phòng tắm • 1 phòng bếp • 55m²</p>
                    <p>3 giường (2 giường đôi, 1 giường sofa)</p>
                </div>
            </div>

            <div className='evaluate-Introduce'>
                <div className='top-evaluate-Introduce'>
                    <div>
                        <p>Rất tốt</p>
                        <p>4 đánh giá</p>
                    </div>

                    <span>8,3</span>
                </div>

                <div className='bottom-evaluate-Introduce'>
                    <span>1 đêm, 2 người lớn</span>
                    <span>VND {price}</span>
                    <span>VND {price / 100 * 70}</span>
                    <div className='discount-BEI'><span>Tiết kiệm 30%</span></div>
                    <p>Đã bao gồm thuế và phí</p>
                </div>
                <div className='button-BEI'>
                    <Button
                        type='primary' danger
                        onClick={() => setIsModalOpen(true)}
                    >
                        Hủy phòng
                    </Button>
                </div>
            </div>

            {
                isModalOpen ? 
                <DeleteBookingModal 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
                :<></>
            }
        </div>
    )
}

export default ListBookerRoom