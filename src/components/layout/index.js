import React, { memo, useEffect, useState, createContext } from "react";
import Sidebar from "./Sidebar";
import Headers from "./Header";

export const sideBarTitleContext = createContext({
    barTitle: "",
    setBarTitle: () => {},
});

export const barLoaderContext=createContext({
    barLoader:0,
    setBarLoader: () => {},
});
const Layout = memo((props) => {
    const [barTitle, setBarTitle] = useState("Dashboard");
    const [barLoader, setBarLoader] = useState(0);
    useEffect(() => {}, []);

    return (
        <sideBarTitleContext.Provider value={{ barTitle, setBarTitle }}>
        <barLoaderContext.Provider value={{ barLoader, setBarLoader }}>

       
            <div className="layout-container">
                <section className="side-bar-countainer">
                    <Sidebar />
                </section>
                <section style={{ width: "100%" }}>
                    <Headers />
                </section>
            </div>
            </barLoaderContext.Provider>
        </sideBarTitleContext.Provider>
    );
});

export default Layout;
