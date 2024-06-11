// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
/* value = 0;
if (value > 0) {
    console.log("true");
} else if (value < 0) {
    console.log("false");
} else {
    console.log("zero");
} */


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
/* value = "true";
if (value == "true") {
    console.log("true");
} */


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
/* value = 13;
if (value >10) {
    console.log(value - 5);
} else if (value < 10){
    console.log(value + 5);
} */


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/* const month = prompt("Введіть число від 1 до 12");

switch (month) {
    case "1":
        alert("Січень");
        break;
    case "2":
        alert("Лютий");
        break;
    case "3":
        alert("Барезень");
        break;
    case "4":
        alert("Квітень");
        break;
    case "5":
        alert("Травень");
        break;
    case "6":
        alert("Червень");
        break;
    case "7":
        alert("Липень");
        break;
    case "8":
        alert("Серпень");
        break;
    case "9":
        alert("Вересень");
        break;
    case "10":
        alert("Жовтень");
        break;
    case "11":
        alert("Листопад");
        break;
    case "12":
        alert("Грудень");
        break;
    default:
        alert("немає такого місяця");
} */


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
let sum = 0;
let value;
 value = Number(prompt("введіть перше число"));
if (value >= 100 && value <= 999) {
    sum += value;
} else {
    alert("Помилка");
}
value = Number(prompt("введіть друге число"));
if (value >= 100 && value <= 999) {
    sum += value;  
}else {
    alert("Помилка");
}
value = Number(prompt("введіть третє число"));
if (value >= 100 && value <= 999) {
    sum += value;
} else {
    alert("Помилка");
}
alert(`сума числа яке ви ввели буде ${sum}`);