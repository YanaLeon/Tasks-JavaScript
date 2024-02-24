// You get an array of arrays. If you sort the arrays by their length, you will see, that their length-values are consecutive. But one array is missing! You have to write a method, that return the length of the missing array.
// Example: [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// If the array of arrays is null/nil or empty, the method should return 0. When an array in the array is null or empty, the method should return 0 too! There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
    if(!Array.isArray(arrayOfArrays)) {
        return 0;
    }

    let arrayLen = [];
    for (let item of arrayOfArrays) {
        if(item == undefined) {
            return 0;
        }
       arrayLen.push(item.length);
    }

    arrayLen = arrayLen.sort((a,b) => a -b);

    if(arrayLen.includes(null || 0)) {
        return 0;
    }

    for (let i = 0; i < arrayLen.length; i++) {
        if(arrayLen[i] + 1 !== arrayLen[i + 1]) {
            return arrayLen[i] + 1;
        }
    }
    return 0;
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[2, 4, 4, 4],
    [2, 2, 0, 0, 2],
    [4, 0, 4, 4, 4, 3, 1],
    [2, 3, 1, 1, 3, 3, 1, 4],
    [0, 1, 3, 2, 2, 1, 1, 1, 1, 4, 1],
    [1, 3, 4, 2, 0, 4, 3, 1, 3],
    [1, 0, 0, 4, 4, 2, 3, 3, 3, 0]]))