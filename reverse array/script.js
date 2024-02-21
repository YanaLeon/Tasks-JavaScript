// 1) Перевернуть массив без использования встроенных методов. Создавать новый массив нельзя.

function revArray (array) {
    let left = 0;
    let right = array.length - 1;

    while (left != right) {
        let y = array[left];
        array[left] = array[right];
        array[right] = y;
        left++;
        right--;
    }

    return array;
}

console.log(revArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))