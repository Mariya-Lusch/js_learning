// МАССИВЫ лекция

const userArr = ["Mary", 28];
console.log(userArr);

// 1. вывести только второй элемент массива
console.log(userArr[1]);

// 2. добавить элемент
userArr[100] = "Luschik";
console.log(userArr);
// создано 97 пустых ячеек, чтобы новое значение имело индекс 100. при этом, строк будет 101.

// 3. изменение элемента массива
userArr[100] = "Kim";
console.log(userArr);

// 4. В массив можно записывать различные типы данных, например, функцию
// const userArrOne = [
//   "Mary",
//   28,
//   30,
//   function () {
//     alert("Hello, my friends");
//   },
// ];
// userArrOne[3]();
// console.log(userArrOne);

// 5. В массивы можно записывать выражения
const userArrTwo = ["Mary", 28, 30, 40, 2000 - 1995];
console.log(userArr);

// 6. Вывести значение последнего индекса, нпр, если их очень много в массиве
console.log(userArrTwo[userArrTwo.length - 1]);
// но эту запись можно скоратить, используя метод массива at
console.log(userArrTwo.at(-1));
