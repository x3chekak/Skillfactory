const age = prompt("Введите ваш возраст");
const isNumber = /^\d+$/.test(age);

if (isNumber && age >= 18) {
    switch (true) {
        case age >= 18 && age <= 21:
            let value = prompt(`Мы можем вам выдать максимум 50000
    Введите сумму кратную 1000`);
            const isNumber2 = /^\d+$/.test(value);
            value >= 0 && value <= 50000 && isNumber2
                ? alert(`Мы можем выдать ${Math.round(value / 1000) * 1000}`)
                : alert(`Видимо вам кредит не нужен. Всего доброго!`);

            break;
        case age >= 22 && age <= 35:
            value = prompt(`Мы можем вам выдать максимум 400000
      Введите сумму кратную 1000`);
            value >= 0 && value <= 400000 && isNumber2
                ? alert(`Мы можем выдать ${Math.round(value / 1000) * 1000}`)
                : alert(`Видимо вам кредит не нужен. Всего доброго!`);

            break;

        case age >= 36 && age <= 65:
            value = prompt(`Мы можем вам выдать максимум 1000000
    Введите сумму кратную 1000`);
            value >= 0 && value <= 1000000 && isNumber2
                ? alert(`Мы можем выдать ${Math.round(value / 1000) * 1000}`)
                : alert(`Видимо вам кредит не нужен. Всего доброго!`);

            break;
        default:
            alert("Банк не одобрит вам кредит, тк у вас маленькая пенсия");
    }
} else if (!isNumber) {
    alert(`Данные введены неверно`);
} else {
    alert(`Кредиты выдаются клиентам достигшим 18 лет`);
};