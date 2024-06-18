let leftToRight = "Довод";
let rightToLeft = "";
let Lower_leftToRight = leftToRight.toLowerCase();
for (let i = Lower_leftToRight.length - 1; i >= 0; i--) {
    rightToLeft += Lower_leftToRight[i];
}
let result =
    Lower_leftToRight === rightToLeft
        ? console.log(`Слово ${leftToRight} является палиндромом`)
        : console.log(`Слово ${leftToRight} не является палиндромом`);