import React, { memo, useEffect, useState, useContext } from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { getDay, getDayName } from "../../utilities/dateFunctions";
const MonthManager = memo((props) => {
    const [daysNums, setDaysNums] = useState([]);
    const [daysNames, setDaysNames] = useState([]);
    const activeDay = getDay(0, true);
    const activeDayPosition = 10;

    useEffect(() => {
        for (let i = 9; i >= 0; i--) {
            if (i < activeDayPosition) {
                let day = getDay(i, true);
                let name = getDayName(i, true);
                setDaysNums((arr) => [...arr, day]);
                setDaysNames((arr) => [...arr, name]);
            }
        }
        //do for future days
        for (let k = 1; k <= 7; k++) {
            let newDay = getDay(k, false);
            let newName = getDayName(k, false);
            setDaysNums((arr) => [...arr, newDay]);
            setDaysNames((arr) => [...arr, newName]);
        }
    }, []);
    const dividerGrid = () => {
        let divGrid = [];
        for (let i = 1; i <= 17; i++) {
            divGrid.push(<span className="vertical-line" key={i}></span>);
        }
        return divGrid;
    };
    return (
        <React.Fragment>
            <div className="month-calendar-container">
               
                <section className="month-calendar-container-one">
                    {daysNums &&
                        daysNums.map((val, id) =>
                            val === activeDay ? (
                                <div key={id} div className="month-calendar-container-day-active">
                                    <span>{daysNames[id]}</span>
                                    <span>{val}</span>
                                </div>
                            ) : (
                                <div key={id}>
                                    <span className="month-calendar-container-day">{daysNames[id]}</span>
                                    <span>{val}</span>
                                </div>
                            )
                        )}
                </section>
                <section className="month-calendar-container-one">{dividerGrid()}</section>
            </div>
        </React.Fragment>
    );
});

export default MonthManager;
