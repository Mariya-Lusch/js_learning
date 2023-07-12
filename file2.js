// Тернарный оператор

// const age = prompt("Let write your age");

const age = 27;

age >= 18
  ? console.log("Я уже взрослый")
  : console.log("Родители говорят, я еще маленький");

const drink = age >= 18 ? "wine" : "juce";
console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "juce";
// }
// console.log(drink2);

console.log(`Я люблю пить ${age >= 18 ? "wine" : "juce"}`);
