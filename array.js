// МАССИВЫ лекция

// 1. добавление в конец массива
const userArr = ["Mary", 28, 30];
userArr.push("female");
console.log(userArr);

// 2. Добавление в начало массива
const userArrOne = ["Mary", 28, 30];
userArrOne.unshift("Russian");
console.log(userArrOne);

// 3. Удаление в конце массива
const userArrTwo = ["Mary", 28, 30];
userArrTwo.pop();
console.log(userArrTwo);

// 4. Удаление в начале массива
const userArrThree = ["Mary", 28, 30];
userArrThree.shift();
console.log(userArrThree);

// 5. Удаление элемента/элементов внутри массива
const userArrFour = ["Mary", 28, 30, 2023 - 1995, "Russian", "female"];
userArrFour.splice(2, 1);
console.log(userArrFour);

// 6. изменение элементов с помощью splice
userArrFour.splice(2, 1, "Lusch", 3458);
console.log(userArrFour);

// Метод splice возвращает удаленные элементы в виде массивов.
const userArrFive = ["Mary", 28, 30, "Lusch", "Russian", "female", "cat"];
const dataFromUser = userArrFive.splice(1, 3);
console.log(userArrFive);
console.log(dataFromUser);

// проверка на наличие того или иного элемента в массиве - возвращает булевое значение
console.log(userArrFive.includes("Mary"));

// проверка наличие опреденного элемента и возвращение его индекса
console.log(userArrFive.indexOf("Lusch"));
