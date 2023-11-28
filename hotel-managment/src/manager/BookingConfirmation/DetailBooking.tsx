import { Button, Form, Input } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmBooking } from '../../apis/booking';
import { MessageContextProvider } from '../../contexts/MessageContext';
import { useContext } from 'react';

const DetailBooking = () => {
  const location = useLocation();
  const { state } = location;

  const mess = useContext(MessageContextProvider);
  const success = mess?.success

  const navigate = useNavigate();

  const data = state.record;
  console.log(data)

  const initialValuesBooking = {
    ...data
  }

  const initialValuesUser = {
    ...data.users[0]
  };

  const comfirmBooking = async () => {
    const res = await confirmBooking({id: data.id});
    if(res?.data) {
      console.log(res)
      success("email xác thực đã được gửi thành công")
      navigate("/admin/booking-confirmation")
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ width: 500 }}
          // disabled={true}
          initialValues={initialValuesUser}
        >
          <Form.Item label="Họ và tên đệm" name="first_name">
            <Input />
          </Form.Item>
          <Form.Item label="Tên khách hàng" name="last_name">
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Vùng/quốc gia" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Điện thoại" name="mobile">
            <Input />
          </Form.Item>
        </Form>

        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ width: 500 }}
          // disabled={true}
          initialValues={initialValuesBooking}
        >
          <Form.Item label="Tên phòng" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Người ở" name="count_user">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày nhận" name="received_date">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày trả" name="pay_day">
            <Input />
          </Form.Item>
          <Form.Item label="Trạng thái" name="status">
            <Input />
          </Form.Item>
        </Form>
      </div>
      <div style={{
        display: "flex", justifyContent: "center", marginTop: "1rem"
      }}>
        {data.idDelete? 
        <Button disabled>Đã hủy</Button>
        :
        <Button onClick={comfirmBooking}>Xác thực</Button>
        }
      </div>
    </>
  )
}

export default DetailBooking