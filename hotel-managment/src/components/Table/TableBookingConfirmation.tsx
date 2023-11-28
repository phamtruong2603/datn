import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { IListBooking } from '../../manager/BookingConfirmation/BookingConfirmation';

interface ITableBookingConfirmation {
    dataSource: IListBooking[]
}

const TableBookingConfirmation: React.FC<ITableBookingConfirmation> = ({ dataSource }) => {

    console.log(dataSource)

    const navigate = useNavigate();

    const navigateBookingDetail = (record: IListBooking) => {
        navigate(
            `/admin/booking-confirmation/${record.id}`, 
            {state : {record}}
        )
    }

    const columns: ColumnsType<IListBooking> = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            className: ''
        },
        {
            title: 'Email người thuê',
            dataIndex: 'email',
            key: 'email',
            render: (_, record) => {
                console.log(record.users[0].email)
                return(
                    <>{record.users[0].email}</>
                )
            },
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
            title: 'Trạng Thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return (
                    <Space size={"large"}>
                        {record.idDelete ?
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
            dataIndex: 'received_date',
            key: 'received_date',
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
                        {record.idDelete ?
                            <Button type="link" danger onClick={() => navigateBookingDetail(record)}  ><Tag bordered={false} color="red">{`Xem -->`}</Tag></Button>
                            : record.status ? "" :
                                <Button type="link" ghost onClick={() => navigateBookingDetail(record)}  ><Tag bordered={false} color="yellow">{`Xác thực -->`}</Tag></Button>
                        }
                    </>
                )
            },
            align: 'center',
            className: '',
            // width: 
        }
    ];

    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableBookingConfirmation