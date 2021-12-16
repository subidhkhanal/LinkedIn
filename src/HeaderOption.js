import React from "react";
import "./HeaderOption.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function HeaderOption({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon classname="headerOption_icon"/>}
            {avatar && (
                <Avatar classname="headerOption_icon">{user?.email[0]}</Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
}

export default HeaderOption;