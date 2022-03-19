import React, { memo, useEffect, useState, useContext } from "react";
import MonthManager from "./MonthRow";
import WorkerCard from "./WorkerCard";
import Tasks from "./Tasks";
import { getMonthYear } from "../../utilities/dateFunctions";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const DashboardManager = memo((props) => {
    const monthYear = getMonthYear();
    useEffect(() => {}, []);

    return (
        <section>
            <section style={{ display: "flex", marginBottom: "2rem" }}>
                <section>
                    <p>{monthYear}</p>
                </section>
                <section style={{ marginLeft: "2rem", paddingTop: "14px", opacity: 0.4 }}>
                    <ArrowForwardIosOutlinedIcon sx={{ transform: "rotate(180deg)" }} />
                    <ArrowForwardIosOutlinedIcon />
                </section>
                <section style={{ marginLeft: "auto", display: "flex" }}>
                    <SearchRoundedIcon style={{ paddingRight: "2rem", paddingTop: "1rem" }} />
                    <div style={{ width: "13rem", borderRadius: "29px", border: "1px solid whitesmoke", marginRight: "4rem", paddingLeft: "26px", paddingTop: "16px", display: "flex" }}>
                        <span>Month</span>
                        <ArrowForwardIosOutlinedIcon sx={{ transform: "rotate(90deg)", opacity: 0.4, marginLeft: "116px" }} />
                    </div>
                </section>
            </section>
            <MonthManager />
            <Tasks />
            <WorkerCard />
        </section>
    );
});

export default DashboardManager;
