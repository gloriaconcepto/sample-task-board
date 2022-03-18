import React, { memo, useEffect, useState, useContext } from "react";
import MonthManager from "./MonthRow";
const DashboardManager = memo((props) => {
    useEffect(() => {}, []);

    return (
        <React.Fragment>
            <MonthManager />
        </React.Fragment>
    );
});

export default DashboardManager;
