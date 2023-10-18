import "./RoomManagement.css";
import { Room } from "../../types/room";
import TableRoom from "../../components/Table/TableRoom";
import DetailRoomManagement from "../../components/Form/DetailRoomManagement";

const data: Room[] = [
    {
        key: 1,
        id: 1,
        name: "Phong 1",
        status: false,
        price: 2500000.0,
        max_user: 4
    },
    {
        key: 2,
        id: 2,
        name: "Phong 2",
        status: true,
        price: 2700000.0,
        max_user: 4
    },
    {
        key: 3,
        id: 3,
        name: "Phong 3",
        status: null,
        price: 2200000.0,
        max_user: 2
    },
];

const RoomManagement = () => {
    return (
        <div>
            <TableRoom dataSource={data} />
            <div className="detail-RoomManagement">
                <DetailRoomManagement data={data}/>
            </div>
        </div>
    )
}

export default RoomManagement