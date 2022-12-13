import SideBar from "./Conpoments/SideBar/Sidebar";
import {Route, Routes} from "react-router-dom";

const app = () => {
  return(
      <div>
        <Routes>
          <Route path="/" element={<SideBar />} />
        </Routes>
      </div>
  )
}
export default app;