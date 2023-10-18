import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Siderbar from "../components/Siderbar/Siderbar";
import Statistical from "./statistical/Statistical";
import RoomManagement from "./RoomManagement/RoomManagement";

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
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Manager