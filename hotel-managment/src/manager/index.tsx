import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Siderbar from "../components/Siderbar/Siderbar";
import Statistical from "./statistical/Statistical";
import NotFound from "../components/NotFound";

const Manager = () => {
  return (
    <div className="manager">
      <Header />
      <div>
        <Siderbar />
        <div className="content">
          <Routes>
            <Route path="/statistical" element={<Statistical />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Manager