import { Table } from 'antd'
import React from 'react'
import { User } from '../../types/user'
import { ColumnsType } from 'antd/es/table'

interface ITableRoom {
    dataSource: User[] | undefined
}

const TableClientManagement: React.FC<ITableRoom> = ({ dataSource }) => {

    const columns: ColumnsType<User> = [
        {
            title: 'Mã Phòng',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: ''
        },
        {
            title: 'Mã Phòng',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: ''
        },
        {
            title: 'Mã Phòng',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: ''
        },
        {
            title: 'Mã Phòng',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: ''
        },
        {
            title: 'Mã Phòng',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: ''
        },
    ]

    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableClientManagement