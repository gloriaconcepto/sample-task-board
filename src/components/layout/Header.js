import React, { memo, useEffect, useState } from "react";
import CycloneIcon from "@mui/icons-material/Cyclone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";
import PushPinIcon from "@mui/icons-material/PushPin";
import MarkAsUnreadSharpIcon from "@mui/icons-material/MarkAsUnreadSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Headers = memo((props) => {
    const [invisible, setInvisible] = useState(false);
    useEffect(() => {}, []);

    return (
        <React.Fragment>
            <div className="header-container">
                <section className="header-container-items">
                    {" "}
                    <section className="header-container-sub-item" style={{ marginLeft: "2rem", fontWeight: "bold" }}>
                        SideBar Name
                    </section>
                    <section className="header-container-sub-item header-container-arrow-left">
                        <ArrowForwardIosIcon sx={{ opacity: 0.2, fontSize: 20 }} />
                    </section>
                    <section className="header-container-sub-item header-container-app-name" style={{ marginLeft: "2rem" }}>
                        <span style={{ opacity: 0.4 }}> Gse Banking App</span>
                    </section>
                </section>
                <section className="header-container-items">
                    <section className="header-container-sub-item header-container-is-image header-container-is-image-messagae">
                        <MarkAsUnreadSharpIcon sx={{ color: "#090739" }} />
                    </section>
                    <section className="header-container-sub-item" style={{ marginRight: "4rem" }}>
                        <Badge invisible={invisible} color="error" variant="dot">
                            <PushPinIcon sx={{ color: "#090739" }} />
                        </Badge>
                    </section>
                    <section className="header-container-sub-item vl"></section>
                    <section className="header-container-sub-item header-container-is-image">
                        <CycloneIcon sx={{ color: "#090739", fontSize: 40 }} />
                    </section>
                    <section className="header-container-sub-item header-container-not-image header-container-items-company-name">
                        <span>RonasIT</span>
                    </section>
                    <section className="header-container-sub-item header-container-is-image-arrow">
                        <ExpandMoreIcon sx={{ opacity: 0.2 }} />
                    </section>
                </section>
            </div>
        </React.Fragment>
    );
});

export default Headers;
