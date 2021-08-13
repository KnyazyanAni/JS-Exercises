/*Compute the area of the right triangle,iwhen are given two legs.*/
function area(a,b,c=90){
    /*Area= (a x b x sin c)/2*/
   let s=Math.floor((a*b*Math.sin(c * Math.PI / 180))/2);
   if(a>0 && b>0){
     return s;
   }
   else{
     return "Enter valid numbers";
   }
 }
 console.log(area(3,4));
 console.log(area(5,4));
 console.log(area(-5,-4));