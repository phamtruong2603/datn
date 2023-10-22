import React from 'react';
import { Button, Table } from 'antd';
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
        render: (_, record) => (<Button type="primary" ghost>Chi tiết</Button>),
        align: 'center',
        className: ''
    }
];

const TableHistory: React.FC<ITableHistory> = ({dataSource}) => {
    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableHistory