// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Given the following input array:
// var list1 = [
//  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
// [
//  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:
// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

function findOddNames(list) {
    let arrayName = [];
    let arrayChar = [];
    let result = [];

    for (let i = 0; i < list.length; i++) {
        arrayName.push(list[i].firstName)
    }

    for (let i = 0; i < arrayName.length; i++) {
        let name;
        let sum = 0;
        name = arrayName[i].split("");
        let obj = {};
        for (let y = 0; y < name.length; y++) {
            sum += name[y].charCodeAt()
        }
        let objName = name.join("");
        obj[objName] = sum;
        arrayChar.push(obj)
    }

    let nameEven = [];

    for (let i = 0; i < arrayChar.length; i++) {
        for (let key in arrayChar[i]) {
            if(arrayChar[i][key] % 2 !== 0) {
                nameEven.push(key);
            }
        }
    }

    for (let item of list) {
        if(nameEven.includes(item.firstName)) {
            result.push(item);
        }
    }
    return result;
}

console.log(findOddNames(list1))

function findOddNames2(list) {
    return list.filter(item => {
        return item.firstName.split("").reduce(((acc, elem) => acc += elem.charCodeAt(0)), 0) % 2 !== 0;
    })
}

console.log(findOddNames2(list1))