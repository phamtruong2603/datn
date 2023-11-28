import React from 'react'
import { Button, Input, Modal } from 'antd'
interface IShowModal {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
}

const DeleteBookingModal: React.FC<IShowModal> = ({
    isModalOpen,
    setIsModalOpen,
}) => {

    const handleCancel = () => { setIsModalOpen(false) }
    const handleOK = () => { }
    return (
        <Modal
            title="Xác Nhận Hủy Phòng"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="ok" type="primary" danger onClick={handleOK}>
                    Xác Nhận
                </Button>,
            ]}
        >
            <p>Nhập mã đã của bạn <span style={{ color: "red" }}>để hủy</span>:</p>
            <br />
            <Input
                placeholder="typing..."
            />
            <br /> <br />
        </Modal>
    )
}

export default DeleteBookingModal