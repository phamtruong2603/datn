import React, { useEffect, useState } from 'react';
import TableBookingConfirmation from '../../components/Table/TableBookingConfirmation';
import { getAllBooking } from '../../apis/booking';
import { User } from '../../types/user';
export interface IListBooking {
  id: Number,
  name: string,
  count_user?: Number
  description?: string
  rental_period?: string
  status?: Boolean | null
  room_id?: number
  verification?: string
  discount?: string,
  received_date?: string,
  pay_day?: string,
  idDelete?: boolean,
  users: User[]
}

const BookingConfirmation = () => {

  const [bookings, setBookings] = useState<IListBooking[]>([])

  useEffect(() => {
    (async () => {
      const res = await getAllBooking();
      if (res?.data) {
        setBookings([
          ...res.data
        ])
      }
    })()
  }, [])

  return (
    <div>
      <div className="title-layout">Xác nhận Đặt phòng</div>
      <TableBookingConfirmation dataSource={bookings} />
    </div>
  )
}

export default BookingConfirmation