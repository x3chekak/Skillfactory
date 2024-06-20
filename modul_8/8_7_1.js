let person = {
    name: 'Alex',
    age: '23'
}

function printInfo() {
    console.log(`Name:${this.name} Age:${this.age}`)
}

printInfo.call(person);