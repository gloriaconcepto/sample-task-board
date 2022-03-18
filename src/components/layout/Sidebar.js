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
//    transform: rotate(270deg);
const Sidebar = memo((props) => {
    const  {setBarTitle} = useContext(sideBarTitleContext);
    const [pushPosition, setPushPosition] = useState(70);
    useEffect(() => {}, []);
    const menusClick = (sideBarName, key) => {
        console.log({ sideBarName, key });
        setBarTitle(sideBarName);
    };
    return (
        <React.Fragment>
            <section className="side-bar-countainer-items">
                <section className="side-bar-countainer-top-item">
                    <div style={{ display: "flex" }}>
                        <span>
                            <PixIcon sx={{ color: "#346BF8", fontSize: 40 }} />
                        </span>
                        <span className="side-bar-countainer-name">PJ</span>
                    </div>

                    <div style={{ marginLeft: `${pushPosition}px`, cursor: "pointer" }}>
                        <VerticalAlignTopIcon sx={{ transform: "rotate(270deg)" }} />
                    </div>
                </section>

                <MenuList>
                    {sidebarMenus.map((value) => (
                        <MenuItem key={value.id} sx={{ marginBottom: "1rem" }} onClick={() => menusClick(value.name, value.id)}>
                            {value.name === "Analytics" ? (
                                <>
                                    <ListItemIcon>{value.icon}</ListItemIcon>
                                    <ListItemText>
                                        {" "}
                                        {value.name} <CircleIcon sx={{ color: "red", fontSize: 8, marginLeft: "4rem" }} />
                                    </ListItemText>
                                </>
                            ) : (
                                <>
                                    <ListItemIcon>{value.icon}</ListItemIcon>
                                    <ListItemText> {value.name}</ListItemText>
                                </>
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
                <section className="side-bar-countainer-create-task">
                    <div>
                        <p>Create</p>
                        <p style={{ marginTop: "-1rem" }}>new task</p>
                    </div>
                    <div style={{ paddingTop: "13px" }}>
                        <AddCircleSharpIcon sx={{ color: "#346BF8", fontSize: 46 }} />
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
});

export default Sidebar;
