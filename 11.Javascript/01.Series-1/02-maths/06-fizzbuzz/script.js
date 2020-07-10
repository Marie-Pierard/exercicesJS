
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    function check(n){
        if(n % 3 === 0 && n % 5 === 0 ){
            console.log("fizzbuzz")
        }else if (n % 3 === 0){
            console.log("fizz");
        }else if(n % 5 === 0){
            console.log("buzz");
        }else{
            console.log(n)
        }
    }
    let i = 1;
    for( i = 1 ; i <= 100; i++){
        check(i);
    }
    console.log(check(i));
})();
