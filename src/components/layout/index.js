import React, { memo, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Headers from "./Header";

const Layout = memo((props) => {
    useEffect(() => {}, []);

    return (
        <React.Fragment>
            <Headers />
            <Sidebar />
        </React.Fragment>
    );
});

export default Layout;
