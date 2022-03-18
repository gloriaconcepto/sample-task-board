import React, { memo, useEffect, useState, useContext } from "react";
import MonthManager from "./MonthRow";
import WorkerCard from "./WorkerCard";

const DashboardManager = memo((props) => {
    useEffect(() => {}, []);

    return (
        <section>
            <MonthManager />
            <WorkerCard />
        </section>
    );
});

export default DashboardManager;
