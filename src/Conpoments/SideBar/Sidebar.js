import React, {useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const _ = require("lodash");

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const list = [
        {id: 1, name: "dashboard", router: "/", icon: "fa fa-dashboard", group: "DashBoard"},
        {id: 1, name: "user", router: "/user", icon: "fa-solid fa-user", group: "User"},
        {id: 1, name: "messages", router: "/message", icon: "fa-solid fa-messages", group: "User"},
        {id: 1, name: "analytics", router: "/analytics", icon: "fa-chart-mixed", margin: true, group: "DashBoard"},
        {id: 1, name: "File Manager", router: "/file", icon: "", group: "DashBoard"},
        {id: 2, name: "Cart", router: "/cart", icon: "", group: "DashBoard"},
        {id: 2, name: "Saved", router: "/save", icon: "", group: "DashBoard"},
        {id: 2, name: "Setting", router: "/cart", icon: "", group: "DashBoard"},
    ]
    const ListItem = _.groupBy(list, "group")
    console.log(Object.values(ListItem))
    return (
        <div className={`bg-[#d71414] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
            <div className="py-3 flex justify-end">
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
            </div>
            <div className="mt-4 flex flex-col gap-4 relative ">
                {Object.values(ListItem).map((item,i)=>{
                    return(
                        <ul>
                            <Link to={item.map((item)=>{item.router})} key={i}>
                                <p className={`whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{item.group}</p>
                                <li className="mt-5 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                                    <FontAwesomeIcon icon={item.icon}/>
                                    <h2 style={{transitionDelay: `${i + 3}00ms`,}}
                                        className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{item.name}</h2>
                                    <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre
                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                                        {item.name}</h2>
                                </li>
                            </Link>
                        </ul>
                    )})}
            </div>
        </div>

    )
};

export default SideBar;
