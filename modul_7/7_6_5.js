const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const keyNames = Object.keys(obj);
const arrValues = [];


for (let key of keyNames) {
    if (!Array.isArray(obj[key])) {
        arrValues.push(obj[key]);
    } else {
        for (let value of obj[key]) {
            arrValues.push(value);
        }
    }
}
console.log(arrValues);