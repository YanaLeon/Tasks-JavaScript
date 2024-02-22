// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogramF(str){
    let strArray = str.toLowerCase().split('');

    let uniqueArray = new Set(strArray);

    return strArray.length === uniqueArray.size
   
}

console.log(isIsogramF("moose"))
console.log(isIsogramF("Dermatoglyphics"))
console.log(isIsogramF("aba"))

function isIsogramS(str){
    let strArray = str.toLowerCase().split('');
    let obj = {}; // ключ - букава, значение - true

    for (let i = 0; i < strArray.length; i++) {
        const value = strArray[i];
        if(value in obj) {
            return false
        }
        obj[value] = true;
    }

    return true;
   
}

console.log(isIsogramS("moose"))
console.log(isIsogramS("Dermatoglyphics"))
console.log(isIsogramS("aba"))