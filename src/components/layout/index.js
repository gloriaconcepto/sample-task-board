import React, { memo, useEffect, useState, createContext } from "react";
import Sidebar from "./Sidebar";
import Headers from "./Header";

export const sideBarTitleContext = createContext({
    barTitle: "",
    setBarTitle: () => {},
});
const Layout = memo((props) => {
    const [barTitle, setBarTitle] = useState("Dashboard");
    useEffect(() => {}, []);

    return (
        <sideBarTitleContext.Provider value={{ barTitle, setBarTitle }}>
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
