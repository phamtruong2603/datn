import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Siderbar from "../components/Siderbar/Siderbar";
import Statistical from "./statistical/Statistical";
import RoomManagement from "./RoomManagement/RoomManagement";
import History from "./History/History";
import BillConfirmation from "./BillConfirmation/BillConfirmation";
import CreateRoom from "./RoomManagement/CreateRoom";
import BookingConfirmation from "./BookingConfirmation/BookingConfirmation";
import DetailBill from "./BillConfirmation/DetailBill";
import DetailBooking from "./BookingConfirmation/DetailBooking";
import ClientManagement from "./ClientManagement/ClientManagement";

const Manager = () => {
  return (
    <div className="manager">
      <Header />
      <div>
        <Siderbar />
        <div className="content">
          <Routes>
            <Route path="/statistical" element={<Statistical />} />
            <Route path="/room-management" element={<RoomManagement />} />
            <Route path="/room-management/create-room" element={<CreateRoom />} />
            
            <Route path="/history" element={<History />} />
            <Route path="/bill-confirmation" element={<BillConfirmation />} />
            <Route path="/bill-confirmation/:id" element={<DetailBill />} />

            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/booking-confirmation/:id" element={<DetailBooking />} />

            <Route path="/client-management" element={<ClientManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Manager