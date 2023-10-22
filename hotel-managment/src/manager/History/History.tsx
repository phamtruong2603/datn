import TableHistory from "../../components/Table/TableHistory";
import { Bill } from "../../types/bill";
import { Button, DatePicker, Input, Space } from 'antd';

const { RangePicker } = DatePicker;

const data: Bill[] = [
  {
    key: 1,
    id: 1,
    name: "Bill Phòng 1",
    price: 2500000.0,
    count_user: 3,
    hotel_id: 1,
    room_id: 1,
    date: "2023-11-10"
  },
  {
    key: 2,
    id: 2,
    name: "Bill Phòng 1",
    price: 2500000.0,
    count_user: 3,
    hotel_id: 1,
    room_id: 1,
    date: "2023-11-10"
  },
  {
    key: 3,
    id: 3,
    name: "Bill Phòng 2",
    price: 2500000.0,
    count_user: 2,
    hotel_id: 1,
    room_id: 2,
    date: "2023-11-10"
  },
]

const History = () => {

  const onSearch = () => { }

  return (
    <div>
      <div className="title-layout">Lịch sử thuê phòng</div>
      <Space style={{ margin: "1rem" }}>
        <Space>Tìm kiếm: </Space>
        <Input placeholder="Nhập phòng muốn tìm....." style={{ width: 300, }}/>
        <RangePicker />
        <Button type="primary" ghost onClick={onSearch}>Tìm kiếm</Button>
      </Space>
      <TableHistory dataSource={data} />
    </div>
  )
}

export default History