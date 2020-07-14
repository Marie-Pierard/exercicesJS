
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    //https://www.w3schools.com/jsref/jsref_getday.asp
    function dateOftheDay() {
        let d = new Date(); 

        let weekday = new Array (7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

        let month = new Array (12);
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

        
        let day = weekday[d.getDay()];
        let date = d.getDate();
        let monthOf = month[d.getMonth()];
        let year = d.getFullYear();
        let hour = d.getHours();
        let min = d.getMinutes();

        document.getElementById("target").innerHTML = "Date and time : " + day + " " + date + " " + monthOf + " " + year + " " + hour + ":" + min;
    }
    dateOftheDay()
})();
