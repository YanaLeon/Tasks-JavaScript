// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
    let resultOdd = integers.filter(elem => {
        return elem % 2 !== 0;
    })
    let resultEven = integers.filter(elem => {
        return elem % 2 === 0;
    })

    if (resultOdd.length === 1) {
        return Number(resultOdd);
    } else {
        return Number(resultEven)
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

function findOutlier2(integers){
    let resultOdd = integers.filter(elem => elem % 2 !== 0)
    let resultEven = integers.filter(elem => elem % 2 === 0)

    return resultOdd.length === 1 ? resultOdd[0] : resultEven[0]
}

console.log(findOutlier2([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier2([160, 3, 1719, 19, 11, 13, -21]))