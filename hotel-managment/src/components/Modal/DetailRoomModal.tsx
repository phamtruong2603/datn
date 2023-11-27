import { Button, DatePicker, Form, InputNumber, Modal } from 'antd';
import React from 'react';
import { IData } from '../../web/Room/Detail';

interface IShowModal {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    data: IData
    setData: (data: IData) => void
}

type FieldType = {
    received_date: string;
    pay_day: string;
    count_user: number;
};

const DetailRoomModal: React.FC<IShowModal> = ({
    isModalOpen,
    setIsModalOpen,
    data,
    setData
}) => {
    const [form] = Form.useForm();
    console.log(data)

    const handleOK = async () => {
        try {
            const values = await form.validateFields();
            const dateStringFormat = 'YYYY-MM-DD';
            const formattedValues: FieldType = {
                received_date: values.received_date.format(dateStringFormat),
                pay_day: values.pay_day.format(dateStringFormat),
                count_user: values.count_user,
            };

            setData(
                {
                    ...data,
                    received_date: formattedValues.received_date,
                    pay_day: formattedValues.pay_day,
                    count_user: formattedValues.count_user
                }
            );
            console.log('Formatted Form values:', formattedValues);
        } catch (errorInfo) {
            console.log('Validation failed:', errorInfo);
        }
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const initialValues = {};

    return (
        <>
            <Modal
                title="Chi tiết đặt phòng"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="ok" type="primary" onClick={handleOK}>
                        OK
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    style={{ maxWidth: 600 }}
                    initialValues={initialValues}
                >
                    <Form.Item label="Ngày nhận" name="received_date" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Ngày trả" name="pay_day" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Số lượng phòng" name="count_user" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default DetailRoomModal;
