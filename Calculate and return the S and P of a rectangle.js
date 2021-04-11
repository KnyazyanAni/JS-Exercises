
/*Area of Rectangle*/
function getArea(length, width) {
    let area;
    // Write your code here
    if(length>=1 && width>=1){
        area=length*width;
    }
    return area;
}
console.log(getArea(5,6));

/*Perimeter of Rectangle*/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    if(length>=1 && width>=1){
        perimeter=(length+width)*2;
    }
    return perimeter;
}
console.log(getPerimeter(5,6));