import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import {useselector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./Login";

function App() {
    const user = useselector(selectUser)
    return (
        <div className="app">
            {/* Header */}
            <Header/>
            {user ? (
                <Login/>
            ) : (
                <div className="app_body">
                    <Sidebar/>
                    <Feed/>
                </div>
            )}
        </div>
    );
}

export default App;
