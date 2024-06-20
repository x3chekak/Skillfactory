let person = {

}
function setFullName(key, value) {

    key.fullName = value;
}

setFullName(person, '');
console.log(person);

const setPersonFullName = setFullName.bind(person, person);
setPersonFullName('John Smith');
console.log(person);

//наверно неправильно, не очень понимаю условие