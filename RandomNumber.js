/*Get a random number in [0,100] range.*/
function randomNumber(min, max){
    let x= Math.floor(Math.random() * (max-min+1));
         return x;
       }
    console.log(randomNumber(0,100));
