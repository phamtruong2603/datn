import TableBillConfirmation from "../../components/Table/TableBillConfirmation";
import { Bill } from "../../types/bill";

const data: Bill[] = [
  {
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