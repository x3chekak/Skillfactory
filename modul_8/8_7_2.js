const args = {
    arg1: "a",
    arg2: 'b',
    arg3: 'operator'
}

const argsValues = [2, 3, '/']

function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    }
}

console.log(calculate.apply(args, argsValues));