import React from 'react';
import
{ BsGrid1X2Fill}
from 'react-icons/bs';
import { IoIosNotifications } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import './sidebar.css';


const Sidebar = () => {
    return(
        
        <div className="sidebar">
            <h1 className='sidebar-title'>
                Quiz Time
            </h1>
            <div className='sidebar-list'>
                
                    <a className='dashboard-item'> 
                        <BsGrid1X2Fill className='icondashboard'/> <span>Dashboard</span>
                    </a>      
                
                    <a href="" className='item'>
                        <FaHeadphonesAlt className='icon'/> Support
                    </a>      
                
                    <a href="" className='item'>
                        <IoIosNotifications className='icon'/> Notification
                    </a>      
                
                    <a href="" className='item logout'>
                        <RiLogoutBoxFill className='icon' /> Log Out
                    </a>
 
            </div>
        </div>
    );
};
export default Sidebar;