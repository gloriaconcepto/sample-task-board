import React, { memo, useEffect, useState, createContext } from "react";
import Sidebar from "./Sidebar";
import Headers from "./Header";

export const sideBarTitleContext = createContext({
    barTitle: "",
    setBarTitle: () => {},
});
const Layout = memo((props) => {
    useEffect(() => {}, []);

    return (
        <sideBarTitleContext.Provider value={{ barTitle: "Dashboard" }}>
            <div className="layout-container">
                <section className="side-bar-countainer">
                    <Sidebar />
                </section>
                <section style={{ width: "100%" }}>
                    <Headers />
                </section>
            </div>
        </sideBarTitleContext.Provider>
    );
});

export default Layout;
