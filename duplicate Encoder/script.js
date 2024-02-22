// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let wordArray = word.toLowerCase().split("");
    let resultString = "";

    for (item of wordArray) {
        if(wordArray.indexOf(item) !== wordArray.lastIndexOf(item)) {
            resultString += ")"
        } else {
            resultString += "("
        }
    }

    return resultString;
    
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))