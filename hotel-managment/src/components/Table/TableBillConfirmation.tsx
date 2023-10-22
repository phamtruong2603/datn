import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Bill } from '../../types/bill';

interface ITableHistory {
  dataSource: Bill[]
}

const columns: ColumnsType<Bill> = [
  {
    title: 'Mã Bill',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    className: ''
  },
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    className: ''
  },
  {
    title: 'Số người thuê',
    dataIndex: 'count_user',
    key: 'count_user',
    align: 'center',
    className: ''
  },
  {
    title: 'Phòng thuê',
    dataIndex: 'room_id',
    key: 'room_id',
    align: 'center',
    className: ''
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    className: ''
  },
  {
    title: 'Trạng Thái',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
      return (
        <Space size={"large"}>
          {record.status == null ?
            <Tag bordered={false} color="red">Đã hủy</Tag> :
            record.status ?
              <Tag bordered={false} color="green">Đã hoàn thành</Tag> :
              <Tag bordered={false} color="yellow">Chưa hoàn thành</Tag>
          }
        </Space>
      )
    },
    align: 'center',
    className: ''
  },
  {
    title: 'Ngày thuê',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
    className: ''
  },
  {
    title: "",
    key: '',
    dataIndex: '',
    render: (_, record) => {
      return (
        <>
          {record.status === null ?
            <Button type="link" danger ><Tag bordered={false} color="red">{`Xem -->`}</Tag></Button>
            : record.status ? "" :
              <Button type="link" ghost><Tag bordered={false} color="yellow">{`Xác thực -->`}</Tag></Button>
          }
        </>
      )
    },
    align: 'center',
    className: ''
  }
];

const TableBillConfirmation: React.FC<ITableHistory> = ({ dataSource }) => {
  return (
    <Table
      bordered={true}
      columns={columns} dataSource={dataSource}
      pagination={false}
    />
  )
}

export default TableBillConfirmation