import React, {useState} from "react";
import {HiMenu, HiMenuAlt3} from "react-icons/hi";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const list = [
        {name: "Dashboard", link: "/", icon: " fas fa-dashboard", group: "DashBoard"},
        {name: "Blog", link: "/blog", icon: "fa-solid fa-newspaper", group: "Blog"},
        {name: "Employee", link: "/employee", icon: "fa-user", group: "User"},
        {name: "Customer", link: "/customer", icon: " fa-users", group: "User"},
        {name: "Brand", link: "/brand", icon: " fa-tags", group: "Product"},
        {name: "Car", link: "/car", icon: "fa-car", group: "Product"},
        {name: "Banner", link: "/banner", icon: "fa-bars-progress", group: "Website"},
        {name: "Car Item", link: "/caritem", icon: "fas fa-archive", group: "Product"},
        {name: "Setting", link: "/setting", icon: " fa-gear", group: "Setting"},
        {name: "Logout", link: "/logout", icon: "fa-right-from-bracket", group: "Setting"},

    ]
    const ListItem = list.reduce((grb, item) => {
        (grb[item.group] = grb[item.group] || []).push(item);
        return grb
    }, {});
    const toggleIsPasswordShowValue = () => {
        setIsPasswordShow(!isPasswordShow);
    };
    const click =() =>{
        toggleIsPasswordShowValue();
        setOpen(!open)
    }
    return (
        <div className={`bg-[#d71414] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4 position-relative`}>
            <div className="py-3 flex justify-end">
                <button  onClick={click}>
                    {
                        isPasswordShow?  <HiMenu size={26} className="cursor-pointer"/> : <HiMenuAlt3 size={26} className="cursor-pointer" />
                    }

                </button>
            </div>
            <ul>
                <div>
                    {Object.keys(ListItem).map(function (side, key) {
                        return (
                            <div key={key}>
                                <h1 className={`whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-28 hidden"}`}>{side}</h1>
                                {
                                    ListItem[side].map(function (item, i) {
                                        return (
                                            <div>
                                                <Link to={item.link} key={i}
                                                      className={`group flex items-center text-sm  gap-3.5 font-medium py-1 rounded-md`}>
                                                    <li className=" group flex items-center text-sm  gap-3.5 font-medium p-2 rounded-md">
                                                        <FontAwesomeIcon icon={`${item.icon}`} size={"xl"} />
                                                        <h2 style={{transitionDelay: `${i + 3}00ms`,}}
                                                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{item.name}</h2>
                                                        <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre
                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                                                            {item.name}</h2>
                                                    </li>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        );
                    })}
                </div>
            </ul>
            <div className="mx-8 col-end-auto">
                <p className={` inset-x-0  h-16 whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                    CAR STORE DEVELOPER</p>
            </div>
        </div>

    )
};

export default SideBar;