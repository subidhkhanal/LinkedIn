import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

                <div className="header_search">
                    {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notification"/>
                <HeaderOption
                    avatar="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/46350448_2173330626260535_343070747675066368_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yzkzdKxBTh0AX9jIU7G&_nc_ht=scontent.fktm8-1.fna&oh=00_AT8xMsOxdkU-9AW7fwwqKNQ1b66Zy6Jd3eMtIcFsvRNTgw&oe=61D8DF6A"
                    title='me'/>
            </div>
        </div>
    );
}

export default Header;