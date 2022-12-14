import Sidebar from "../../Conpoments/SideBar/Sidebar";
import Navbar from "../../Conpoments/Navbar/Navbar";

const Dashboard = ({children}) => {
    return (
        <section className="flex flex-row">
            <Sidebar/>
            <div className="flex flex-col content" style={{width:"-webkit-fill-available"}}>
                <Navbar/>
                {children}
            </div>
        </section>
    )
}
export default Dashboard;