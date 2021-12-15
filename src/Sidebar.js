import React from "react";
import {Avatar} from "@material-ui/core";
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Subidh Khanal</h2>
                <h4>subidhkhanal37@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viewed you</p>
                    <p className="sidebar_statNumber">10,000</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className="sidebar_statNumber">10,000</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('javascript')}
                {recentItem('FrondEnd Developer')}
                {recentItem('CSS')}

            </div>

        </div>
    );
}

export default Sidebar;