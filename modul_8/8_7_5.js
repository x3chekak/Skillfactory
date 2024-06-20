const arr = [40, 3, 2, 1, 18, 4, 2, 3, 20, 9, 5, 1, 65];

const newSet = new Set(arr);
const newArr = Array.from(newSet).sort(function (a, b) { return a - b });
console.log(newArr);