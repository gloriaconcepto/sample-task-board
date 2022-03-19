import React, { memo } from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
const Card = memo((props) => {
    const { name, role, url, key } = props;
    return (
        <section key={key} style={{ marginBottom: "1rem" }}>
            <Paper elevation={1} sx={{ width: 322, height: 74, borderRadius: 5, paddingTop: "1rem", paddingLeft: "22px", paddingRight: "22px", display: "flex" }}>
                <Avatar alt={name} src={url} sx={{ height: "4rem", width: "4rem", marginRight: "20px" }} />
                <section style={{ width: "223px" }}>
                    <p>{name}</p>
                    <p style={{ opacity: 0.4, marginTop: "-1rem" }}>{role}</p>
                </section>
                <section>
                    <MoreHorizTwoToneIcon sx={{ opacity: 0.4, transform: "rotate(90deg)", fontSize: "4rem" }} />
                </section>
            </Paper>
        </section>
    );
});

export default Card;
