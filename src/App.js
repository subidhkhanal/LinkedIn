import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div className="app">
            {/* Header */}
            <Header/>
            {/* App Body */}
            <div className="app_body">
                <Sidebar/>
            </div>
        </div>
    );
}

export default App;
