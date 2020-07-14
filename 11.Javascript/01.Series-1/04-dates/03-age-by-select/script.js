
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
   
    // your code here
    document.getElementById("run").addEventListener("click", () => {

    let today = new Date(); 
                /*new Date() // heure courante dans le fuseau horaire locale */
        console.log(today);
        
    let currentDay = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();


    let birthDay = document.getElementById("dob-day").value;    
    let birthMonth = document.getElementById("dob-month").value;
    let birthYear = document.getElementById("dob-year").value;
    
    let currentDate = (currentYear * 365.25) + (currentMonth * 30.42) + currentDay;
    
    let birthDate = (birthYear * 365.25) + (birthMonth * 30.42) + birthDay;

    let result = currentDate - birthDate;
    let yourAge = Number(Math.floor(result / 365.25));
    alert("You are " + yourAge + " years old.");
    
 
});
})();
