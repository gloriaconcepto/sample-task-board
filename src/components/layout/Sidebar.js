import { spacing } from "@mui/system";
import React, { memo, useEffect, useState } from "react";
import PixIcon from "@mui/icons-material/Pix";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
//    transform: rotate(270deg);
const Sidebar = memo((props) => {
    const [pushPosition, setPushPosition] = useState(70);
    useEffect(() => {}, []);

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
            </section>
        </React.Fragment>
    );
});

export default Sidebar;
