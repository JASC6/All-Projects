//If div by 6 (2,3)
//If div by 8 (2,4)
//If div ends in 5 (comp)
//If ends in 0 (comp)
//If div by 7()
//If div by 3(9)

//console.log(2);
//console.log(3);
//console.log(5);
//console.log(7);

//for(let prime = 1; prime < 1001; prime++) {
 
let prime = parseInt(process.argv[2]);

if(prime > 10) {
    
    if(prime%2 == 0){
console.log("not a prime");
    }

else if(prime%3 == 0){
console.log("not a prime");
}

else if(prime%5 == 0){
console.log("not a prime");
}

else if(prime%7 == 0){
console.log("not a prime");
}
 else {
    console.log(prime);
}
}