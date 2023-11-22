import { Button, Form, Input } from 'antd'
import React from 'react'

const DetailBooking = () => {

  const initialValues = {}

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ width: 500 }}
          disabled={true}
          initialValues={initialValues}
        >
          <Form.Item label="Họ và tên đệm" name="id">
            <Input />
          </Form.Item>
          <Form.Item label="Tên khách hàng" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ email" name="status">
            <Input />
          </Form.Item>
          <Form.Item label="Vùng/quốc gia" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="Điện thoại" name="max_user">
            <Input />
          </Form.Item>
        </Form>

        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ width: 500 }}
          disabled={true}
          initialValues={initialValues}
        >
          <Form.Item label="Tên phòng" name="id">
            <Input />
          </Form.Item>
          <Form.Item label="Giá phòng" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày nhận" name="status">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày trả" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="Điện thoại" name="max_user">
            <Input />
          </Form.Item>
        </Form>
      </div>
      <div style={{
        display: "flex", justifyContent: "center", marginTop: "1rem"
      }}>
        <Button>Xác thực</Button>
      </div>
    </>
  )
}

export default DetailBooking