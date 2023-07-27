function mergeSort(arr){
    //Base case
    if (arr.length === 1) {
        return arr;
    }
   
    //To determine the midpoint
    const midpoint = Math.floor(arr.length/2);

    //Recursively define and sort left half
    const left = mergeSort(arr.slice(0, midpoint));
    
    //Recursively define and sort right half
    const right = mergeSort(arr.slice(midpoint, arr.length));

    //Merge the sorted halfs
    return merge(left, right);

}

function merge(left, right){
    //Empty array to store values
    const result = [];

    //Loop to sort values
    while (left.length > 0 && right.length > 0){
        if (left[0] < right[0]) {
            result.push(left[0]);
            left.shift()
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    while(left.length > 0) {
        result.push(left[0]);
        left.shift();
    }

    while (right.length > 0){
        result.push(right[0]);
        right.shift();
    }

    return result;
}

console.log(mergeSort([6,4,9,2,1,5,8,7,3]));