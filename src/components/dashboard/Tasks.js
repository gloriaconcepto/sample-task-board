import React, { memo, useEffect, useState, useContext } from "react";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CircleIcon from "@mui/icons-material/Circle";
// import Card from "../../utilities/cards";

const Tasks = memo((props) => {
    useEffect(() => {}, []);

    return (
        <section className="tasks-container">
            <section className="tasks-container-position-8" style={{ backgroundColor: `#FFF2EA`, marginBottom: "4rem" }}>
                <section className="tasks-container-position-inner-8" style={{ backgroundColor: `#FD7E2E`, width: `18%`, color: `#FD7E2E` }}>
                    <CircleTwoToneIcon sx={{ marginLeft: "3rem", marginTop: "12px", color: `#FFF2EA` }} />
                    <p className={`tasks-container-percentage-position-8`}>18%</p>
                </section>
            </section>
            <section className="tasks-container-position-9" style={{ backgroundColor: `#F5F4FF`, marginBottom: "4rem" }}>
                <section className="tasks-container-position-inner-9" style={{ backgroundColor: `#0B093A`, width: `18%`, color: `#0B093A` }}>
                    <CircleTwoToneIcon sx={{ marginLeft: "3rem", marginTop: "12px", color: `#F5F4FF` }} />
                    <p className={`tasks-container-percentage-position-9`}>18%</p>
                </section>
            </section>
            <section className="tasks-container-position-2" style={{ backgroundColor: `#FEF9E6`, marginBottom: "4rem" }}>
                <section className="tasks-container-position-inner-2" style={{ backgroundColor: `#F9D018`, width: `18%`, color: `#F9D018` }}>
                    <CircleTwoToneIcon sx={{ marginLeft: "3rem", marginTop: "12px", color: `#FEF9E6` }} />
                    <p className={`tasks-container-percentage-position-2`}>18%</p>
                </section>
            </section>
            <section className="tasks-container-position-7" style={{ backgroundColor: `#E9F8FB`, marginBottom: "4rem" }}>
                <section className="tasks-container-position-inner-7" style={{ backgroundColor: `#1BD3FC`, width: `18%`, color: `#1BD3FC` }}>
                    <CircleTwoToneIcon sx={{ marginLeft: "3rem", marginTop: "12px", color: `#E9F8FB` }} />
                    <p className={`tasks-container-percentage-position-7`}>18%</p>
                </section>
            </section>
            <section className="tasks-container-position-4" style={{ backgroundColor: `#F5F4FF`, marginBottom: "4rem" }}>
                <section className="tasks-container-position-inner-4" style={{ backgroundColor: `#0B093A`, width: `18%`, color: `#0B093A` }}>
                    <CircleTwoToneIcon sx={{ marginLeft: "3rem", marginTop: "12px", color: `#F5F4FF` }} />
                    <p className={`tasks-container-percentage-position-4`}>18%</p>
                </section>
            </section>
        </section>
    );
});

export default Tasks;
