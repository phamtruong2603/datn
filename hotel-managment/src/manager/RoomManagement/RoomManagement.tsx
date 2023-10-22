import "./RoomManagement.css";
import { Room } from "../../types/room";
import TableRoom from "../../components/Table/TableRoom";
import { Input } from 'antd';

const { Search } = Input;

const data: Room[] = [
    {
        key: 1,
        id: 1,
        name: "Phòng 1",
        status: false,
        price: 2500000.0,
        max_user: 4
    },
    {
        key: 2,
        id: 2,
        name: "Phòng 2",
        status: true,
        price: 2700000.0,
        max_user: 4
    },
    {
        key: 3,
        id: 3,
        name: "Phòng 3",
        status: null,
        price: 2200000.0,
        max_user: 2
    },
    {
        key: 4,
        id: 4,
        name: "Phòng 4",
        status: false,
        price: 2200000.0,
        max_user: 2
    },
    {
        key: 5,
        id: 5,
        name: "Phòng 5",
        status: false,
        price: 2200000.0,
        max_user: 4
    },
];

const RoomManagement = () => {

    const onSearch = () => { };

    return (
        <div>
            <div className="header-RoomManagement">
                <div className="title-layout">Danh sách phòng trong khách sạn</div>
                <div style={{ margin: "1rem" }}><Search placeholder="Nhập phòng muốn tìm....." onSearch={onSearch} style={{ width: 300 }} /></div>
            </div>
            <TableRoom dataSource={data} />
        </div>
    )
}

export default RoomManagement