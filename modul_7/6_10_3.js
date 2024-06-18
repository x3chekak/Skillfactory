const name = prompt("Введите ваше имя");
const age = prompt("Введите ваш год рождения");
if (name != null && age != null && name != "" && age != "") {
    if (isNaN(name) && !isNaN(age)) {
        alert(`${name}: ${2024 - +age}`);
    } else {
        alert(`Данные введены неверно`);
    }
} else {
    alert(`Данные введены неверно`);
}