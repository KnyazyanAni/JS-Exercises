/*Write a JS program to compute the area of the triangle, 
with two sides and an angle:
If the area>50, print: "Big triangle", 
if area>100, print "Very big Triangle". 
Use Math.random to find out sides of the triangle and an angle*/
function findArea(){
  /*Area= (a x b x sin c)/2*/
  let c = Math.sin(Math.round(Math.sin(Math.random()*180 * Math.PI / 180)));
  let a = Math.floor(Math.random()*101,2);
  let b = Math.floor(Math.random()*101,2);
  let area = a*b*c/2;
  if(area>50 && area<100){
      return "Big triangle";
  }
  else if(area>100){
    return "Very big triangle";
  }
  else{
    return "Enter valid numbers!";
  }
}
console.log(findArea());