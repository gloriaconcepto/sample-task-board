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
