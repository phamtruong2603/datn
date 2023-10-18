import React from 'react';
import {
    Form,
    Input,
    InputNumber,
    Switch,
} from 'antd';
import { Room } from '../../types/room';

interface IDetailRoomManagement {
    data: Room[]
}

const DetailRoomManagement:React.FC<IDetailRoomManagement> = ({data}) => {
    const initialValues = {
    };

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            disabled={true}
            initialValues={initialValues}
        >
            <Form.Item label="Mã Phòng" name="id">
                <Input />
            </Form.Item>
            <Form.Item label="Tên Phòng" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="Trạng Thái" name="status">
                <Input />
            </Form.Item>
            <Form.Item label="Đơn giá" name="price">
                <Input />
            </Form.Item>
            <Form.Item label="Tối đa" name="max_user">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
                <Switch />
            </Form.Item>
        </Form>
    )
}

export default DetailRoomManagement