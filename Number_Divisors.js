function numberDivisors(num){
    let arr = [];
    for (let i = 2; i <= num; i++){
        if (num % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(numberDivisors(100));