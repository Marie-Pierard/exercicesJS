
    do {
        let age = prompt("How old are you?");
        let sex = prompt("Are you male or female?");
        let city = prompt("In which city do you live?");
        var confirmation = confirm("Your are "+age+", you are a "+sex+" and you live in "+city+". Is that correct?");       
    } 
    while (confirmation != true);     


