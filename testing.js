const moment = require("moment");

// Today's due date
let today = moment().format("M/D");

console.log("TODAY'S DUE DATE = " +today);


// Tomorrow's due date
let tomorrow = moment().add(1, "days").format("M/D");

console.log("TOMORROW'S DUE DATE = " +tomorrow);

// A week's worth of due dates

let week = [1, 2, 3, 4, 5, 6, 7];

let dates = week.map(getDates => {
    dueDates = moment().add(getDates, "days").format("M/D");

    return dueDates;
});

console.log("THE NEXT WEEK'S DUE DATES ARE : " +dates);
