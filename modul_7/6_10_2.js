const sale = "скидка";
const checksale = prompt("Введите промокод");

const Lower_checksale = checksale.toLocaleLowerCase();
if (Lower_checksale == sale) {
    alert(`Промокод применен`);
} else {
    alert(`Промокод не работает`);
}