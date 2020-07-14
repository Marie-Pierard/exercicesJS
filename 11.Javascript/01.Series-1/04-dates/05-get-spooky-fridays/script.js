
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    //https://www.toutjavascript.com/main/script.php?url=vendredi13
    let run = document.getElementById("run");

    function Friday13(d1) {
        var m = new Array(13);
        m[1] = "January"; 
        m[2] = "February";
        m[3] = "March";
        m[4] = "April"; 
        m[5] = "May";
        m[6] = "June";
        m[7] = "July";
        m[8] = "August";
        m[9] = "September";
        m[10]= "October";
        m[11]= "November";
        m[12] = "December";

        var d=new Array(8); 
        d[1] = "Sunday";
        d[2] = "Monday"; 
        d[3] = "Tuesday";
        d[4] = "Wednesday";
        d[5] = "Thursday"; 
        d[6] = "Friday"; 
        d[7] = "Saturday";
        

        var month=m[d1.getMonth()+1];
        var day=d[d1.getDay()+1];
        var date=d1.getDate();
        var year=d1.getYear();
        if (year<200) year+=1900; 
        date = day+" "+date+" "+month+" "+year;
        return date;
        }
    function next() {
        let dt_day=new Date;
        let year=dt_day.getYear();
        if (year<200) year+=1900; 
        let m=dt_day.getMonth();
        let d=dt_day.getDate(); 
        if (d>13) m++;
        let fri="";
        while (fri=="") {
            dt_day.setDate(13);
            dt_day.setMonth(m);
            dt_day.setYear(year);
            if (dt_day.getDay()==5) {
                fri=Friday13(dt_day);
            }
            m++; 
            if (m==13) {m=0; year++;}
        }
        return fri;
    }
    run.addEventListener('click', function friday(){    
        let year=document.forms[0].elements[0].value;
        let dt_day=new Date;
        document.getElementById("target").innerHTML+=unescape("Fridays that fall on the 13th "+year+"%0D%0A");
        for(let i=0;i<12;i++) {
            dt_day.setMonth(i);
            dt_day.setDate(13);
            dt_day.setYear(year);
            if (dt_day.getDay()==5) {
                document.getElementById("target").innerHTML +=unescape(Friday13(dt_day)+"%0D%0A");
            }
        }
        alert(friday);
    })
})();

