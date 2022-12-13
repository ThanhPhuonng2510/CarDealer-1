import React, {useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const SideBar = () => {
    const [open, setOpen] = useState(true);
    const list = [
        { name: "dashboard", link: "/", icon: " fa-dashboard", group: "DashBoard"},
        { name: "analytics", link: "/analytics", icon: " fa-dashboard", margin: true, group: "DashBoard"},
        { name: "File Manager", link: "/file", icon:  " fa-dashboard", group: "DashBoard"},
        { name: "Cart", link: "/cart", icon:  " fa-dashboard", group: "DashBoard"},
        { name: "Saved", link: "/save", icon:  " fa-dashboard", group: "DashBoard"},
        { name: "Setting", link: "/cart", icon:  " fa-dashboard", group: "DashBoard"},
        { name: "user", link: "/user", icon: " fa-dashboard", group: "User"},
        { name: "messages", link: "/message", icon: " fa-dashboard", group: "User"},

    ]
    const ListItem = list.reduce((grb,item)=>{
        (grb[item.group]=grb[item.group] || []).push(item);
        return grb
    },{});
    var arr = [];
    function removeDuplicates(arr) {
        var unique = [];
        for(var j=0; j < arr.length; j++){
            if(unique.indexOf(arr[j]) === -1) {
                unique.push(arr[j]);
            }
        }
        return unique;
    }
     list.forEach((item)=>{
         if(item.group !== arr){
             arr.push(item.group);

         }
    })
   var check =removeDuplicates(arr);
    var n = document.getElementsByTagName("p");
    for(var i =0 ; i < n.length;i++){
        const P = document.createElement("P");
        const textNode = document.createTextNode(`${check[i]}`);
        P.appendChild(textNode);
        document.body.appendChild(P)
        console.log(textNode)
    }
    return (
        <div className={`bg-[#d71414] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
            <div className="py-3 flex justify-end">
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
            </div>
                <ul>
                    <div>
                        <p className={`whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{check}</p>
                        {ListItem.DashBoard.map((item,i)=>
                            <>
                                <Link to={item.link} key={i}   className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                    <li className=" group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                                        <FontAwesomeIcon icon={`fa ${item.icon}`}/>
                                        <h2 style={{transitionDelay:  `${i + 3}00ms`,}}
                                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{item.name}</h2>
                                        <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre
                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                                            {item.name}</h2>
                                    </li>
                                </Link>
                            </>
                        )}
                    </div>
                    <div>
                        <p className={`whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{check}</p>
                        {ListItem.User.map((item,i)=>
                            <>
                                <Link to={item.link} key={i}   className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                    <li className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                                        <FontAwesomeIcon icon={`${item.icon}`}/>
                                        <h2 style={{transitionDelay: `${i + 3}00ms`,}}
                                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{item.name}</h2>
                                        <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre
                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                                            {item.name}</h2>
                                    </li>
                                </Link>
                            </>
                        )}
                    </div>
                </ul>
        </div>

    )
};

export default SideBar;
