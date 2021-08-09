
/*1:  Create a new array, which will have only "red" color elements.*/
function filterArr(){
    const iceCreams = [
        { flavor: 'pineapple', color: 'white' },
        { flavor: 'strawberry', color: 'red' },
        { flavor: 'watermelon', color: 'red' },
        { flavor: 'kiwi', color: 'green' },
        { flavor: 'mango', color: 'yellow' },
        { flavor: 'pear', color: 'green' }
        ];
    let newArr=[];
    for(let i=0;i<iceCreams.length;i++){
      if(iceCreams[i].color==="red"){
        newArr.push(iceCreams[i]);
      }
    }
    return newArr;
}
console.log(filterArr());
/*2: Get a new array from the given array, which will have new key:value(id:1, id:2...) element  for all objects of the array.*/
const iceCreams = [
    { flavor: 'pineapple', color: 'white' },
    { flavor: 'strawberry', color: 'red' },
    { flavor: 'watermelon', color: 'red' },
    { flavor: 'kiwi', color: 'green' },
    { flavor: 'mango', color: 'yellow' },
    { flavor: 'pear', color: 'green' } 
    ];
    iceCreams= iceCreams.map((x, i) => {
        x.id = i + 1;
        return x;
    });
console.log(iceCreams);
/*3: Compute the sum of all elements of the array.*/
 function sumArray(){
    const arr=[10,20,30,45,100];
    let result=0;
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
        return result;
}
console.log(sumArray());
/*4:Find out if there are "male" students above "age" of 18.*/
function check() {
    const students = [
        {name: 'Ani', age:17, gender: 'female'},
        {name: 'Alex', age:24, gender: 'male'},
        {name: 'Alen', age:28, gender: 'male'},
        {name: 'John', age:16, gender: 'male'},
        {name: 'Sofa', age:20, gender: 'female'},
        {name: 'Mark', age:20, gender: 'male'},
        ];
    let newArr=[];
    for(let i=0; i<students.length; i++){
        if(students[i].gender==="male" && students[i].age>18){
        newArr.push(students[i].name);
        }
    }
    return "where are male students above 18: " + newArr;
}
console.log(check());
/*5. Write a JavaScript program to generate an array, containing the Fibonacci sequence, 
    up until the nth element< 1000 using while statement.*/
function fibonacci(){
    let n1 = 0;
    let n2 = 1;
    let result = 0;
    let sequence=[0,1];
    while (result<1000) {
        result=n1+n2;
        n1 = n2;
        n2 = result;
        sequence.push(result);
    } 
    sequence.pop(n2);
    return sequence;
}
console.log(fibonacci());
    