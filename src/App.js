import {Route, Routes} from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Login from "./Conpoments/Login/Login";

const app = () => {
  return(
      <>
        {/*<Routes>*/}
        {/*  <Route path="/" element={<Dashboard />} />*/}
        {/*</Routes>*/}
          <Login/>
      </>
  )
}
export default app;