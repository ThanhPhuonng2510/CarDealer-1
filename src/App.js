import Dashboard from "./Page/Dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import User from "./Conpoments/User/User";

const app = () => {
  return(
      <Routes>
          <Route path="/" >
              <Route path="/employee" element={<Dashboard>
                  <User/>
              </Dashboard>}/>
          </Route>
      </Routes>
  )
}
export default app;