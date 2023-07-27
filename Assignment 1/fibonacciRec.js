function fibsRec(n) {
    //Base Case
    if (n <= 0) {
        return "Error: Not a Valid Input";
    }

    if (n === 1) { 
        return [0];
    }

    if (n === 2) {
        return [0,1];
    }

    //Recursive Step
    return [... fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
 }

//Test Cases
console.log(fibsRec(-2)); //Should return "Error: Not a Valid Input"
console.log(fibsRec(1)); // Should return [0]
console.log(fibsRec(2)); // Should return [0,1]
console.log(fibsRec(3)); // Should return [0,1,1]
console.log(fibsRec(8)); // Should return [0,1,1,2,3,5,8,13]