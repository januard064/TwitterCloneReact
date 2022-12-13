import React,{useEffect, useState} from "react";
import { FaTwitter, FaRegBookmark } from 'react-icons/fa'
import { RiHome7Fill, RiHashtag, RiFileList2Line } from 'react-icons/ri'
import { VscBell } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";




import './sidebar.css';


function Sidebar(){

    const [userActive, setUserActive] =useState('')

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('DataUser'));
        setUserActive(userData)
        console.log(userData)
    },[])

    return(
        <>
        <div className="sidebar">
            <ul>
                <li><a href=""><FaTwitter className="icons logo" /></a></li>
                <li><a href=""><RiHome7Fill className="icons logo" />Home</a></li>
                <li><a href=""><RiHashtag className="icons" />Explore</a></li>
                <li><a href=""><VscBell className="icons" />Notifications</a></li>
                <li><a href=""><FiMail className="icons" />Messages</a></li>
                <li><a href=""><FaRegBookmark className="icons" />Bookmarks</a></li>
                <li><a href=""><RiFileList2Line className="icons" />Lists</a></li>
                <li><a href=""><IoPersonOutline className="icons" />Profile</a></li>
                <li><a href=""><CgMoreO className="icons" />More</a></li>  
            </ul>
            <div className="profile">
                <div className="profiles">
                    <img src={userActive.imgSource} />
                </div>
                <div className="name">
                    <p className="name">{ userActive.username }</p>
                    <p className="username">@{ userActive.email}</p>
                </div>
               
            </div>
        </div>
            <div className="sidebar-little">
            <ul>
                <li><a href=""><FaTwitter className="icons logo" /></a></li>
                <li><a href=""><RiHome7Fill className="icons logo" /></a></li>
                <li><a href=""><RiHashtag className="icons" /></a></li>
                <li><a href=""><VscBell className="icons" /></a></li>
                <li><a href=""><FiMail className="icons" /></a></li>
                <li><a href=""><IoPersonOutline className="icons" /></a></li>
                <li><a href=""><CgMoreO className="icons" /></a></li>
            </ul>
            <div className="profile">
               <img src={userActive.imgSource} />
            </div>
        </div>
     </>
    )
}

export default Sidebar;