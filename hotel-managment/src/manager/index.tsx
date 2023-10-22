import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Siderbar from "../components/Siderbar/Siderbar";
import Statistical from "./statistical/Statistical";
import RoomManagement from "./RoomManagement/RoomManagement";
import History from "./History/History";
import BillConfirmation from "./BillConfirmation/BillConfirmation";

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
            <Route path="/history" element={<History />} />
            <Route path="/bill-confirmation" element={<BillConfirmation />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Manager