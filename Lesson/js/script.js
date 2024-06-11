// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

const message = "JavaScript is awesome!";

/* alert(message);
console.log(message); */
// Виведення

// alert(message);

// console.log(message);

// Отримання

// confirm
/* const isConfirm = confirm("Please confirm");
console.log(isConfirm); */
// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or no?");
// console.log(test);

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);

/* const userName = prompt("Enter your name");
console.log(userName);

const number = prompt("Enter number");
console.log(number); */

// const number = prompt("Please enter number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // 'string'
// console.log(value); // '5'

//let value;

// ---String--- //

/* value = false;
console.log(typeof value);
const newValue = String(value);
console.log(typeof newValue); */
// const newValue = String(value);
// console.log(typeof newValue);

// ---Number--- //

/* value = "123";
console.log(typeof value);
const newValue = Number(value);
console.log(typeof newValue); */
/* 
const test = Number("qwery");
console.log(test);
 */
// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty");
// console.log(test);
// console.log(typeof value);

// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

//console.log(Boolean(1)); // true
//console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN));
// console.log(Boolean(null));
/* console.log(Boolean(NaN));
console.log(Boolean(null)); */
// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
//console.log(2 ** 3);
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(6 / 2);

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2);
// console.log(4 ** 4);

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

/* console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(7 <= 3); */
/* 
let value = "0";
console.log(value == 0); */

//console.log(5 !== 5);
// == приведення до типу

// ----------------------------------//
// ----------------------------------//
// or -and -not //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  //
/* 
console.log(5 === 6 && 6 > 3);
console.log(6 + 3 >= 9 && 9 + 1 === 10); */
// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

//   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6);

//   -----not (!) ------ //
//console.log(5 * 5 === 25 || 2 * 2 === 5);
// console.log(!false);

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//
/* if (5 + 5 === 10) {
    console.log("Hello");
} else {
    console.log("NotHello");
} */
//--- одинарні
// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// }

/// ------Тернарний оператор------///
//2 + 2 ===; 5 ? console.log("1") : console.log("2");
// 2 + 2 === 4 ? console.log("1") : console.log("2");
// 5 * 5 === 24 ? console.log(true) : console.log(false);
/* 
if (5 + 5 === 10) {
    console.log("5+5 === 10");
} else if (2 + 2 === 4) {
    console.log("2+2 === 6");
} else {
    console.log("no");
} */



// if (5 + 5 === 10) {
//   console.log("5+5 ===10");
// } else if (2 + 2 === 4) {
//   console.log("2+2 ===4");
// } else {
//   console.log("no");
// }

// let leng = "ua";

// if (leng === "ua") {
//   console.log("Понеділок");
// } else if (leng === "en") {
//   console.log("Monday");
// } else {
//   console.log("Reset");
// }

// ----------------------------------//
// ----------------------------------//
// switch/case
// ----------------------------------//
// ----------------------------------//
/* let num = 5;
switch (num) {
    case 0:
        console.log(0);
        break;
    case 5:
        console.log(5);
        break;
    case 10:
        console.log(10);
        break;
    
}
 */
/* 
let cost;
const sub = "pro";
switch (sub) {
    case "free":
        cost = 0;
        break;
    
    case "pro":
        cost = 100;
        break;
    case "premium":
        cost = 500;
        break;
    
    default:
        console.log("Invalid");
}
console.log(cost); */
// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
// }

// console.log(cost);

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("ВВедіть іншу цифру");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "груша":
//     cost = 15;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "кавун":
//     cost = 50;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "вишня":
//     cost = 70;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;

//   default:
//     alert(`Товару ${value} немає в наявності`);
// }

// const num = 8;

// num % 2 === 0 ? console.log(true) : console.log(false);


/* const min = prompt("Введіть хвилину");

if (min >= 0 && min <= 14) {
    console.log("Перша чверть");
} else if (min >= 15 && min <= 29) {
    console.log("Друга чверть");
} else if (min >= 30 && min <= 44) {
    console.log("Третя чверть");
} else if (min >= 45 && min <= 59) {
    console.log("Четверта чверть");
} else {
    console.log("Введіть іншу цифру");
} */

const value = prompt("Введіть назву товару").toLowerCase();
let cost;

switch (value) {
    case "яблуко":
        cost = 10;
        break;
    case "вишня":
        cost = 50;
        break;
    case "грушка":
        cost = 70;
        break;
    case "чорниця":
        cost = 80;
        break;
    case "кавун":
        cost = 100;
        break;
    
    default: alert(`Товару ${value}, немає в наявності`);
}

alert(`${value} коштує ${cost} гривень`);