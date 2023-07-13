// Функции, параметры, атрибуты

"use strict";

// function Declaration
function calc(a, b, c) {
  return a + b - c;
}

const result = calc(20, 40, 7);
console.log(result);


// function Expression
let result2 = function (d, c, m) {
  return d + c * m;
};

console.log(result2(20, 6, 2));
