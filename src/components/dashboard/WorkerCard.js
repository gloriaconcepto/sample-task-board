import React, { memo, useEffect, useState, useContext } from "react";
import Card from "../../utilities/cards";
const workers = [
    {
        name: "Anna S.",
        role: "Senior UX/UI Designer",
        url: "static/images/avatars/woman2.jpg",
    },
    {
        name: "Mmk E.",
        role: "Programmer",
        url: "static/images/avatars/man5.jpg",
    },
    {
        name: "Azuka O.",
        role: "Devops",
        url: "static/images/avatars/man4.jpg",
    },
    {
        name: "Gloria S.",
        role: "Quality Assurance",
        url: "static/images/avatars/woman4.jpg",
    },
    {
        name: "Finna A.",
        role: "UX Designer",
        url: "static/images/avatars/man3.jpg",
    },
    {
        name: "Emma F.",
        role: "Quality Assurance",
        url: "static/images/avatars/woman5.jpg",
    },
    {
        name: "Alex B.",
        role: "UX Analyst",
        url: "static/images/avatars/man2.jpg",
    },
    {
        name: "Jennifer S.",
        role: "Fron-end Programmer",
        url: "static/images/avatars/woman1.jpg",
    },
    {
        name: "Cody D.",
        role: "UX Analyst",
        url: "static/images/avatars/man1.jpg",
    },
    {
        name: "Samanta G.",
        role: "Senior UX/UI Designer",
        url: "static/images/avatars/woman3.jpg",
    },
];
const WorkerCard = memo((props) => {
    const [workerData, setWorkerData] = useState([]);
    useEffect(() => {
        shuffleArray(workers);
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setWorkerData((arr) => [...arr, array]);
    };

    return (<section className="workers-cards-container">{workerData && workerData[0] && workerData[0].map((value, key) => <Card name={value.name} key={key} role={value.role} url={value.url} />)}
   
    </section>);
});

export default WorkerCard;
