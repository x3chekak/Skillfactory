const number = prompt("ВВедите любое число");
const isNumber = +number;
const arr = [];
if (isNumber < 0) {
    for (let i = 0; i >= isNumber; i--) {
        arr.unshift(i);
    }
} else {
    for (let i = 0; i <= isNumber; i++) {
        arr.unshift(i);
    }
}
console.log(arr);