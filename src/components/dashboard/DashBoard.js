import React, { memo, useEffect, useState, useContext } from "react";
import MonthManager from "./MonthRow";
import WorkerCard from "./WorkerCard";
import Tasks from "./Tasks";
import { getMonthYear } from "../../utilities/dateFunctions";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { barLoaderContext } from "../layout/index";
const DashboardManager = memo((props) => {
    const { barLoader } = useContext(barLoaderContext);
    const monthYear = getMonthYear();
    useEffect(() => {}, []);

    return (
        <section>
            <section className="percentage-loader-container">
                <section>
                    <h1 style={{ fontSize: "large" }}>GSE BANKING app</h1>
                    <section style={{ display: "flex", marginTop: "-1rem", marginBottom: "2rem" }}>
                        <span style={{ marginTop: "-5px", marginRight: "11px", opacity: 0.4 }}>{`${barLoader}%`}</span>
                        <section className="percentage-loader-container-outer-loader">
                            {" "}
                            <section className="percentage-loader-container-inner-loader" style={{ width: `${barLoader}%` }}></section>
                        </section>
                    </section>
                </section>
                <section className="percentage-loader-container-left">
                    <section className="invite-border-line">
                        <AddIcon sx={{ opacity: 0.4, marginRight: "11px" }} />
                        <span style={{ opacity: 0.4 }}>Invite</span>
                    </section>
                    <section style={{ width: "4rem" }}>
                        <AvatarGroup max={4} spacing="small">
                            <Avatar alt="Remy Sharp" src="static/images/avatars/woman2.jpg" />
                            <Avatar alt="Travis Howard" src="static/images/avatars/man5.jpg" />
                            <Avatar alt="Cindy Baker" src="static/images/avatars/man4.jpg" />
                            <Avatar alt="Agnes Walker" src="static/images/avatars/woman4.jpg" />
                            <Avatar alt="Trevor Henderson" src="static/images/avatars/man3.jpg" />
                            <Avatar alt="Cindy Baker" src="static/images/avatars/man4.jpg" />
                            <Avatar alt="Agnes Walker" src="static/images/avatars/woman4.jpg" />
                            <Avatar alt="Trevor Henderson" src="static/images/avatars/man3.jpg" />
                            <Avatar alt="Agnes Walker" src="static/images/avatars/woman4.jpg" />
                            <Avatar alt="Trevor Henderson" src="static/images/avatars/man3.jpg" />
                            <Avatar alt="Cindy Baker" src="static/images/avatars/man4.jpg" />
                            <Avatar alt="Agnes Walker" src="static/images/avatars/woman4.jpg" />
                            <Avatar alt="Trevor Henderson" src="static/images/avatars/man3.jpg" />
                            <Avatar alt="Agnes Walker" src="static/images/avatars/woman4.jpg" />
                            <Avatar alt="Trevor Henderson" src="static/images/avatars/man3.jpg" />
                            <Avatar alt="Cindy Baker" src="static/images/avatars/man4.jpg" />
                            <Avatar alt="Agnes Walker" src="static/images/avatars/woman4.jpg" />
                            <Avatar alt="Trevor Henderson" src="static/images/avatars/man3.jpg" />
                        </AvatarGroup>
                    </section>
                </section>
            </section>
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
