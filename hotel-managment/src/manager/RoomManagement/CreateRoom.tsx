import { Button, Form, Input, InputNumber, Select } from 'antd'
import { createRoom } from '../../apis/room';
import { useNavigate } from 'react-router-dom';

type FieldType = {
    name?: string,
    description?: string,
    status?: boolean | string | null,
    price?: number,
    max_user?: number,
    hotel_id?: number
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

interface IOptionStatus {
    value: string,
    label: string
}

const CreateRoom = () => {

    const navigate = useNavigate()

    const optionStatus: IOptionStatus[] = [
        { value: "true", label: 'Đã thuê' },
        { value: "false", label: 'Còn trống' },
        { value: "null", label: 'Đang sửa chữa' }
    ]

    const initialValues = {
        price: 0,
        hotel_id: 1,
        max_user: 2
    }

    const onFinish = async (values: FieldType) => {
        values.status === "true" ? values.status = true :
            values.status === "false" ? values.status = false :
                values.status = null

        const res = await createRoom(values)
        if (res?.status === '201') {
            navigate("/admin/room-management")
        }
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={initialValues}
        >
            <Form.Item<FieldType>
                label="Tên phòng"
                name="name"
            // rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder='Tên phòng...' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Mô tả"
                name="description"
            // rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input placeholder='Mô tả...' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Trạng thái phòng"
                name="status"
            >
                <Select
                    placeholder="Lựa chọn"
                    style={{ width: "100%" }}
                    options={optionStatus}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Giá tiền"
                name="price"
            >
                <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                />
            </Form.Item>
            <Form.Item<FieldType>
                label="Số người tối đa"
                name="max_user"
            >
                <InputNumber
                    style={{ width: '100%' }}
                    min={1}
                    max={4}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Id Hotel"
                name="hotel_id"

            >
                <InputNumber
                    style={{ width: '100%' }}
                    disabled={true}
                />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateRoom