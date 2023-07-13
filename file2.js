// Функции колбэка

"use strict";

//function decloration

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else no();
}

function showOk() {
  alert("Спасибо за согласие");
}

function showCansel() {
  alert("Вы отказались");
}

// ask("Вы согласны?", showOk, showCansel);

//function expresion
ask(
  "Вы согласны?",
  function () {
    alert("Спасибо за согласие");
  },
  function () {
    alert("Вы отказались");
  }
); // у функции убираем название, т.к. в данном случае оно нам не нужно, обращаться к нему мы не будем
