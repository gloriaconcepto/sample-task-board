import React, { memo, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Headers from "./Header";

const Layout = memo((props) => {
    useEffect(() => {}, []);

    return (
        <div className="layout-container">
            <section className="side-bar-countainer">
                <Sidebar />
            </section>
            <section style={{ width: "100%" }}>
                <Headers />
            </section>
        </div>
    );
});

export default Layout;
