import React from 'react';
import TableBookingConfirmation from '../../components/Table/TableBookingConfirmation';
import { Booking } from '../../types/booking';

const data: Booking[] = [
    {
      id: 1,
      name: "Booking Phòng 1",
      count_user: 3,
      rental_period: "2023-11-10",
      status: true
    },
    {
      id: 2,
      name: "Booking Phòng 1",
      count_user: 3,
      room_id: 1,
      rental_period: "2023-11-10",
      status: false
    },
    {
      id: 3,
      name: "Booking Phòng 2",
      count_user: 2,
      room_id: 2,
      rental_period: "2023-11-10",
      status: null
    },
  ]

const BookingConfirmation = () => {
  return (
    <TableBookingConfirmation dataSource={data}/>
  )
}

export default BookingConfirmation