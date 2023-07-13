// Стрелочные функции

"use strict";

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else no();
}

ask(
  "Вы согласны?",
  () => alert("Спасибо за согласие"),
  () => alert("Вы отказались")
);

let sum = (a, b) => a + b;

console.log(sum(5, 5));
