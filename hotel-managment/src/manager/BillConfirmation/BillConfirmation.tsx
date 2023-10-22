import TableBillConfirmation from "../../components/Table/TableBillConfirmation";
import { Bill } from "../../types/bill";

const data: Bill[] = [
  {
    key: 1,
    id: 1,
    name: "Bill Phòng 1",
    price: 2500000.0,
    count_user: 3,
    hotel_id: 1,
    room_id: 1,
    date: "2023-11-10",
    status: true
  },
  {
    key: 2,
    id: 2,
    name: "Bill Phòng 1",
    price: 2500000.0,
    count_user: 3,
    hotel_id: 1,
    room_id: 1,
    date: "2023-11-10",
    status: false
  },
  {
    key: 3,
    id: 3,
    name: "Bill Phòng 2",
    price: 2500000.0,
    count_user: 2,
    hotel_id: 1,
    room_id: 2,
    date: "2023-11-10",
    status: null
  },
]

const BillConfirmation = () => {

  return (
    <div>
      <div className="title-layout">Xác nhận hóa đơn</div>
      <TableBillConfirmation dataSource={data} />
    </div>
  )
}

export default BillConfirmation