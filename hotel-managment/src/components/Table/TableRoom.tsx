import { Button, Space, Table, Tag } from "antd";
import { Room } from "../../types/room";
import type { ColumnsType } from 'antd/es/table';
import React from "react";

interface ITableRoom {
    dataSource: Room[]
}

const columns: ColumnsType<Room> = [
    {
        title: 'Mã Phòng',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        className: ''
    },
    {
        title: 'Tên Phòng',
        dataIndex: 'name',
        key: 'name',
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
                        <Tag bordered={false} color="volcano">Đang sửa chữa</Tag> :
                        record.status ?
                            <Tag bordered={false} color="green">Đã thuê</Tag> :
                            <Tag bordered={false} color="geekblue">Còn trống</Tag>
                    }
                </Space>
            )
        },
        align: 'center',
        className: ''
    },
    {
        title: 'Đơn giá',
        key: 'price',
        dataIndex: 'price',
        align: 'center',
        className: ''
    },
    {
        title: 'Tối đa',
        key: 'max_user',
        dataIndex: 'max_user',
        render: (max_user) => <>{`${max_user} người`}</>,
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

const TableRoom: React.FC<ITableRoom> = ({ dataSource }) => {
    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableRoom