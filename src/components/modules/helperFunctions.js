export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

export function splitTypeArray(arr) {
    return arr.join(" and ");
}
export function currentDateTime(currentDate) {
    let generateCurrentDateTime;
    //gets current date and time
    
    //get current time in user location based on locale date format
    let currentTime = new Date(currentDate).toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit"
    })

    //get today's date
    let date = new Date(currentDate).getDate();
    //get current month
    let month = new Date(currentDate).getMonth();
    //get current year
    let year = new Date(currentDate).getFullYear();

    //list of months
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    
    //this will generate string of the current month, date, year @ and current time in format specified
    generateCurrentDateTime = months[month] + " " + date + "," + year + " @ " + currentTime;

    return generateCurrentDateTime
}