// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explodeF(str) {
    let strArray = str.split('');
    let resultStr = "";

    for (let i = 0; i < strArray.length; i++) {
        let value = Number(strArray[i]);
        while ( value > 0) {
            resultStr += strArray[i];
            value--;
        }
    }

    return resultStr;
}

console.log(explodeF("312"))
console.log(explodeF("102269"))

function explodeS(str) {
    let strArray = str.split('');
    let resultStr = "";

    for (let i = 0; i < strArray.length; i++) {
        let value = Number(strArray[i]);
        let newElem = strArray[i].repeat(value);
        resultStr += newElem;
    }

    return resultStr;
}

console.log(explodeS("312"))
console.log(explodeS("102269"))