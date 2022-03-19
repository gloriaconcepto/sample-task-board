import { spacing } from "@mui/system";
import React, { memo, useEffect, useState, useContext } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import PixIcon from "@mui/icons-material/Pix";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { sidebarMenus } from "../../utilities/constants";
import { sideBarTitleContext } from "./index";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Avatar from "@mui/material/Avatar";
//    transform: rotate(270deg);
const Sidebar = memo((props) => {
    const { setBarTitle } = useContext(sideBarTitleContext);
    const [pushPosition, setPushPosition] = useState(70);
    const [key, setKey] = useState(1);
    const [isCollapse, setCollapse] = useState(false);
    useEffect(() => {}, []);
    const menusClick = (sideBarName, key) => {
        setBarTitle(sideBarName);
        setKey(key);
    };
    const collapseSideBar = () => {
        setCollapse(!isCollapse);
    };
    return (
        <React.Fragment>
            <section className="side-bar-countainer-items">
                <section className="side-bar-countainer-top-item">
                    <div style={{ display: "flex" }}>
                        {!isCollapse && (
                            <span>
                                <PixIcon sx={{ color: "#346BF8", fontSize: 40 }} />
                            </span>
                        )}
                        {!isCollapse && <span className="side-bar-countainer-name">PJ</span>}
                    </div>

                    <div style={{ marginRight: "2rem", cursor: "pointer" }} onClick={() => collapseSideBar()}>
                        <VerticalAlignTopIcon sx={{ transform: "rotate(270deg)" }} />
                    </div>
                </section>

                <MenuList>
                    {sidebarMenus.map((value) => (
                        <MenuItem key={value.id} sx={{ marginBottom: "1rem", color: key === value.id ? "#346BF8" : null }} onClick={() => menusClick(value.name, value.id)}>
                            {value.name === "Analytics" ? (
                                <>
                                    <ListItemIcon sx={{ color: key === value.id ? "#346BF8" : null }}>{value.icon}</ListItemIcon>
                                    {!isCollapse && (
                                        <ListItemText>
                                            {" "}
                                            {value.name} <CircleIcon sx={{ color: "red", fontSize: 8, marginLeft: "4rem" }} />
                                        </ListItemText>
                                    )}
                                </>
                            ) : (
                                <>
                                    <ListItemIcon sx={{ color: key === value.id ? "#346BF8" : null }}>{value.icon}</ListItemIcon>
                                    {!isCollapse && <ListItemText> {value.name}</ListItemText>}
                                </>
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
                {!isCollapse && (
                    <section className="side-bar-countainer-create-task">
                        <div>
                            <p>Create</p>
                            <p style={{ marginTop: "-1rem" }}>new task</p>
                        </div>
                        <div style={{ paddingTop: "13px" }}>
                            <AddCircleSharpIcon sx={{ color: "#346BF8", fontSize: 46 }} />
                        </div>
                    </section>
                )}
                {!isCollapse &&<section style={{ display: "flex", marginTop: "10rem" }}>
                    <Avatar alt=">Finna A." src="static/images/avatars/man3.jpg" sx={{ height: "4rem", width: "4rem", marginRight: "20px" }} />
                    <section style={{ width: "155px" }}>
                        <p>Finna A.</p>
                        <p style={{ opacity: 0.4, marginTop: "-1rem" }}>finna@ksg.com</p>
                    </section>
                    <section style={{ paddingRight: "12rem", transform: "rotate(180deg)", position: "absolute", opacity: 0.4 }}>
                        <KeyboardArrowDownOutlinedIcon />
                    </section>
                </section>}
            </section>
        </React.Fragment>
    );
});

export default Sidebar;
