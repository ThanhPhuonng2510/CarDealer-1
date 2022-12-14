import Sidebar from "../Conpoments/SideBar/Sidebar";
import Navbar from "../Conpoments/Navbar/Navbar";

const Dashboard = () => {
    return (
        <section className="flex flex-row">
            <Sidebar/>
            <Navbar/>
        </section>
    )
}
export default Dashboard;