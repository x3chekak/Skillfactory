const name = prompt("Введите ваше имя");
const age = prompt("Введите ваш год рождения");
const ostatok = (2024 - age) % 10;
if (name != null && age != null && name != "" && age != "") {
    if (isNaN(name) && !isNaN(age)) {
        if (ostatok == 1) {
            alert(`${name}: ${2024 - age} год`);
        } else if (ostatok >= 2 && ostatok <= 4) {
            alert(`${name}: ${2024 - age} года`);
        } else if (ostatok >= 5 || ostatok == 0) {
            alert(`${name}: ${2024 - age} лет`);
        }
    } else {
        alert(`Данные введены неверно`);
    }
} else {
    alert(`Данные введены неверно`);
}