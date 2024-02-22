// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
// [] --> 0
// [1, 2, 3] --> 3
// ["x", "y", ["z"]] --> 4
// [1, 2, [3, 4, [5]]] --> 7

function deepCount(a){
   let result = a.length;

   for (let i = 0; i < a.length; i++) {
    if(Array.isArray(a[i])) {
        result += deepCount(a[i]);
    }
   }

   return result;
}

console.log(deepCount(["x", "y", ["z"]]))
console.log(deepCount([]))
console.log(deepCount([1, 2, 3]))
console.log(deepCount([1, 2, [3, 4, [5]]]))