//get day

export const getDay = (days, ispreviousDays) => {
    const date = new Date();
    if (ispreviousDays) {
        let lastDay = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
        return lastDay.getDate();
    } else {
        let newDay = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
        return newDay.getDate();
    }
};
//get the name of the day
export const getDayName = (days, ispreviousDays) => {
    const date = new Date();
    let dayName = 0;
    let day = null;
    if (ispreviousDays) {
        let lastDay = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
        dayName = lastDay.getUTCDay();
    } else {
        let newDay = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
        dayName = newDay.getUTCDay();
    }
    switch (dayName) {
        case 0:
            day = "S";
            break;
        case 1:
            day = "M";
            break;
        case 2:
            day = "T";
            break;
        case 3:
            day = "W";
            break;
        case 4:
            day = "T";
            break;
        case 5:
            day = "F";
            break;
        case 6:
            day = "S";
    }
    return day;
};
