const users = [
    { name: "John", age: 28 },
    { name: "Alex", age: 31 },
    { name: "David", age: 21 },
    { name: "Martin", age: 17 }
];

const filteredUsers = users.filter((user) => {
    return user.age >= 18;
});

console.log(filteredUsers);
// не понял условие, сделал 2 варианта.

//массив значений name
const userNames = users.map((user) => {
    return user.name;
})

console.log(userNames);
// массив свойств
function getUserNamesList(arr) {
    return arr.map((el) => ({ name: el.name }))
}
const userNameList = getUserNamesList(users);
console.log(userNameList);