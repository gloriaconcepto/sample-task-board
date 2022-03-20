import React, { memo, useEffect, useState, useContext, useCallback, useRef } from "react";

import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import { barLoaderContext } from "../layout/index";
// import Card from "../../utilities/cards";
let workDataColor = [
    {
        primColor: "#FFF2EA",
        secColor: "#FD7E2E",
    },
    {
        primColor: "#FEF9E6",
        secColor: "#F9D018",
    },
    {
        primColor: "#F5F4FF",
        secColor: "#0B093A",
    },
    {
        primColor: "#E9F8FB",
        secColor: "#1BD3FC",
    },
    {
        primColor: "#bee8cc",
        secColor: "#4aa669",
    },
    {
        primColor: "#bab6a8",
        secColor: "#ae8d1a",
    },
    {
        primColor: "#FFF2EA",
        secColor: "#FD7E2E",
    },
    {
        primColor: "#FEF9E6",
        secColor: "#F9D018",
    },
    {
        primColor: "#F5F4FF",
        secColor: "#0B093A",
    },
    {
        primColor: "#E9F8FB",
        secColor: "#1BD3FC",
    },
];
let assignWork = [
    {
        task: "Flow Swift transfer",
    },
    {
        task: "design chat",
    },
    {
        task: "Transaction analytics",
    },
    {
        task: "Setting",
    },
    {
        task: "Api design",
    },
    {
        task: "Documentation",
    },
    {
        task: "Pipeline",
    },
    {
        task: "Jenkins Configs",
    },
    {
        task: "Flow Swift transfer",
    },
    {
        task: "design chat",
    },
];
let Workposition = [8, 9, 2, 7, 4, 8, 9, 2, 7, 4];
let accum = 0;
const Tasks = memo((props) => {
    const { setBarLoader } = useContext(barLoaderContext);
    const [workerPos, setWorkerPos] = useState([]);
    const [taskPercentage, setTaskPercentage] = useState([20, 30, 40, 60, 20, 50, 70, 80, 90, 20]); //
    const [isStopWidth, setStopWidth] = useState([false, false, false, false, false, false, false, false, false, false]);
    const myRef = useRef(null);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const myRef4 = useRef(null);
    const myRef5 = useRef(null);
    const myRef6 = useRef(null);
    const myRef7 = useRef(null);
    const myRef8 = useRef(null);
    const myRef9 = useRef(null);

    let randomPercentage = Math.floor(Math.random() * 30) + 15; //30
    let maxPercentage = 100;
    const calculatePercentage = (num, isFull) => {
        if (isFull) {
            setBarLoader(100);
        } else {
            let result = (num * 100) / 1000;

            setBarLoader(result);
        }
    };
    myRef1.current = () => {
        if (!isStopWidth[1]) {
            if (taskPercentage[1] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[1] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[1] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[1] + randomPercentage;
                accum = accum + newPerTasks[1];

                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[1] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[1] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[1] = add;

                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };

    myRef2.current = () => {
        if (!isStopWidth[2]) {
            if (taskPercentage[2] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[2] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[2] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[2] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[2] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[2] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[2] = add;
                    accum = accum + newPerTasks[2];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef3.current = () => {
        if (!isStopWidth[3]) {
            if (taskPercentage[3] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[3] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[3] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[3] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[3] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[3] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[3] = add;
                    accum = accum + newPerTasks[3];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef4.current = () => {
        if (!isStopWidth[4]) {
            if (taskPercentage[4] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[4] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[4] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[4] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[4] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[4] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[4] = add;
                    accum = accum + newPerTasks[4];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };

    myRef5.current = () => {
        if (!isStopWidth[5]) {
            if (taskPercentage[5] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[5] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[5] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[5] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[5] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[5] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[5] = add;
                    accum = accum + newPerTasks[5];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef6.current = () => {
        if (!isStopWidth[6]) {
            if (taskPercentage[6] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[6] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[6] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[6] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[6] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[6] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[6] = add;
                    accum = accum + newPerTasks[6];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef7.current = () => {
        if (!isStopWidth[7]) {
            if (taskPercentage[7] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[7] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[7] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[7] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[7] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[7] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[7] = add;
                    accum = accum + newPerTasks[7];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef8.current = () => {
        if (!isStopWidth[8]) {
            if (taskPercentage[8] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[8] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[8] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[8] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[8] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[8] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[8] = add;
                    accum = accum + newPerTasks[8];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef9.current = () => {
        if (!isStopWidth[9]) {
            if (taskPercentage[9] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[9] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[9] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[9] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[9] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[9] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[9] = add;
                    accum = accum + newPerTasks[9];
                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    myRef.current = () => {
        if (!isStopWidth[0]) {
            if (taskPercentage[0] >= maxPercentage) {
                let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                resetPerTasks[0] = 100;
                let newArry = JSON.parse(JSON.stringify(isStopWidth));
                newArry[0] = true;
                setStopWidth(newArry);
            } else {
                let newPerTasks = JSON.parse(JSON.stringify(taskPercentage));

                let add = newPerTasks[0] + randomPercentage;
                if (add >= maxPercentage) {
                    let resetPerTasks = JSON.parse(JSON.stringify(taskPercentage));
                    resetPerTasks[0] = 100;
                    setTaskPercentage(resetPerTasks);
                    let newArry = JSON.parse(JSON.stringify(isStopWidth));
                    newArry[0] = true;
                    setStopWidth(newArry);
                } else {
                    newPerTasks[0] = add;
                    accum = accum + newPerTasks[0];

                    setTaskPercentage(newPerTasks);
                }
            }
        }
    };
    useEffect(() => {
        shuffleArray(Workposition);
    }, []);

    useEffect(() => {
        shuffleTaskArray(taskPercentage);
    }, []);

    useEffect(() => {
        const tasksCalculation = setInterval(() => {
            myRef.current();

            if (taskPercentage[0] === 100) {
                clearInterval(tasksCalculation);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation);
    }, [taskPercentage[0]]);
    useEffect(() => {
        const tasksCalculation1 = setInterval(() => {
            myRef1.current();
            if (taskPercentage[1] >= 100) {
                clearInterval(tasksCalculation1);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation1);
    }, [taskPercentage[1]]);

    useEffect(() => {
        const tasksCalculation2 = setInterval(() => {
            myRef2.current();
            if (taskPercentage[2] >= 100) {
                clearInterval(tasksCalculation2);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation2);
    }, [taskPercentage[2]]);
    useEffect(() => {
        const tasksCalculation3 = setInterval(() => {
            myRef3.current();
            if (taskPercentage[3] >= 100) {
                clearInterval(tasksCalculation3);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation3);
    }, [taskPercentage[3]]);
    useEffect(() => {
        const tasksCalculation4 = setInterval(() => {
            myRef4.current();
            if (taskPercentage[4] >= 100) {
                clearInterval(tasksCalculation4);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation4);
    }, [taskPercentage[4]]);

    useEffect(() => {
        const tasksCalculation5 = setInterval(() => {
            myRef5.current();
            if (taskPercentage[5] >= 100) {
                clearInterval(tasksCalculation5);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation5);
    }, [taskPercentage[5]]);
    useEffect(() => {
        const tasksCalculation6 = setInterval(() => {
            myRef6.current();
            if (taskPercentage[6] >= 100) {
                clearInterval(tasksCalculation6);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation6);
    }, [taskPercentage[6]]);
    useEffect(() => {
        const tasksCalculation7 = setInterval(() => {
            myRef7.current();
            if (taskPercentage[7] >= 100) {
                clearInterval(tasksCalculation7);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation7);
    }, [taskPercentage[7]]);

    useEffect(() => {
        const tasksCalculation8 = setInterval(() => {
            myRef8.current();
            if (taskPercentage[8] >= 100) {
                clearInterval(tasksCalculation8);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation8);
    }, [taskPercentage[8]]);

    useEffect(() => {
        const tasksCalculation9 = setInterval(() => {
            myRef9.current();

            if (taskPercentage[9] >= 100) {
                clearInterval(tasksCalculation9);
            }
        }, 10000);
        return () => clearInterval(tasksCalculation9);
    }, [taskPercentage[9]]);
    useEffect(() => {
        let sum = taskPercentage.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        if (sum === 1000) {
            calculatePercentage(sum, true);
        } else {
            calculatePercentage(sum, false);
        }
    }, [taskPercentage]);

    const shuffleTaskArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        setWorkerPos((arr) => [...arr, array]);
    };

    return (
        <section className="tasks-container">
            {workerPos &&
                workerPos[0] &&
                workerPos[0].map((val, index) => (
                    <section className={`tasks-container-position-${val}`} style={{ backgroundColor: `${workDataColor[index].primColor}`, marginBottom: "4rem" }} key={index}>
                        <section className={`tasks-container-position-inner-${val}`} style={{ backgroundColor: `${workDataColor[index].secColor}`, width: `${isStopWidth[index] ? "100%" : `${taskPercentage[index]}%`}` }}>
                            <CircleTwoToneIcon sx={{ marginLeft: "3rem", marginTop: "12px", color: `${workDataColor[index].primColor}` }} />
                            <p style={{ color: "white", paddingLeft: "6px", position: "absolute", paddingLeft: "6rem" }}>{assignWork[index].task}</p>
                            <p className={`tasks-container-percentage-position-${val}`} style={{ color: `${isStopWidth[index] ? "white" : `${workDataColor[index].secColor}`}` }}>
                                {isStopWidth[index] ? `100%` : `${taskPercentage[index]}%`}
                            </p>
                        </section>
                    </section>
                ))}
        </section>
    );
});

export default Tasks;
