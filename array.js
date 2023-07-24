// МАССИВЫ лекция...

const arr = [
  "Mariya",
  "Luschik",
  2023 - 1995,
  "Pushkino",
  true,
  ["mother", "father", "brother", "husb"],
];

// console.log(arr);

// вывести каждый элемент массива по отдельности
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// вывести тип данных
for (let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]);
}

// поместить конвертиврованные данные в другой массив
const arr2 = [];

for (let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]);
  arr2.push(typeof arr[i]);
}
console.log(arr2);

// выборка опреденного типа данных из массива - пропуск итерации с помощью continue
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") continue;
  console.log(arr[i]);
}

// прекращение выполнения цикла с помощью break
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") break;
  console.log(arr[i]);
}
