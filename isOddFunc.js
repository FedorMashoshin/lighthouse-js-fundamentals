const isOdd = num => {
    if(num % 2 !== 0){
        return `${num} is odd`
    } else {
        return `${num} is even`
    }
}

console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(6));
console.log(isOdd(15));
