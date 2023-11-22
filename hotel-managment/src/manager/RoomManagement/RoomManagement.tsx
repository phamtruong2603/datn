import "./RoomManagement.css";
import { Room } from "../../types/room";
import TableRoom from "../../components/Table/TableRoom";
import { Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const data: Room[] = [
    {
        id: 1,
        name: "Phòng 1",
        status: false,
        price: 2500000.0,
        max_user: 4
    },
    {
        id: 2,
        name: "Phòng 2",
        status: true,
        price: 2700000.0,
        max_user: 4
    },
    {
        id: 3,
        name: "Phòng 3",
        status: null,
        price: 2200000.0,
        max_user: 2
    },
    {
        id: 4,
        name: "Phòng 4",
        status: false,
        price: 2200000.0,
        max_user: 2
    },
    {
        id: 5,
        name: "Phòng 5",
        status: false,
        price: 2200000.0,
        max_user: 4
    },
];

const RoomManagement = () => {

    const navigate = useNavigate();

    const onSearch = () => { };

    const navigateCreateRoom = () => {
        navigate("/admin/room-management/create-room")
    }

    return (
        <div>
            <div className="header-RoomManagement">
                <div className="title-layout">Danh sách phòng trong khách sạn</div>
                <div style={{ margin: "1rem" }}><Search placeholder="Nhập phòng muốn tìm....." onSearch={onSearch} style={{ width: 300 }} /></div>
            </div>
            <Button onClick={navigateCreateRoom} type="primary">Thêm phòng mới</Button>
            <br /> <br />
            <TableRoom dataSource={data} />
        </div>
    )
}

export default RoomManagement