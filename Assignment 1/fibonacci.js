function fibs(n){
    //Intializing the array
    const fibArray = [0,1];

    //Handling the base cases of 0 and 1
    if (n <= 0) {
        return "Error: Not a Valid Input"
    }

    if (n === 1) {
        return fibArray[0]
    }
    
    //Looping over values over 2; taking the sum of the two numbers in the array preceding it
    for (let i = 2; i < n; i++){
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2]);
    }
    return fibArray;
}

//Test Cases
console.log(fibs(-2)); //Should return "Error: Not a Valid Input"
console.log(fibs(1)); // Should return [0]
console.log(fibs(2)); // Should return [0,1]
console.log(fibs(3)); // Should return [0,1,1]
console.log(fibs(8)); // Should return [0,1,1,2,3,5,8,13]