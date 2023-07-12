const firstName = prompt("Введите Ваше имя");
const secondName = prompt("Введите имя партнера");

const randomNumder = Math.floor(Math.random() * 100);

// дополнительно задаем условие, что переменные firstName и secondName не должны быть пустыми ("") и не равно null 

if (
  randomNumder < 33 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}
    Рекомендуем поискать другой вариант...`
  );
} else if (
  randomNumder >= 33 &&
  randomNumder < 66 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}
    Неплохо, если поработать над отношениями...`
  );
} else if (
  randomNumder >= 66 &&
  firstName != null &&
  secondName != null &&
  firstName != "" &&
  secondName != ""
) {
  alert(
    `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}
    Отличная совместимость! Но помни, над отношениями всегда нужно работать...`
  );
} else {
  alert(
    "Упс... Вы не ввели имя. Попробуй перезапустить страницу введите имена"
  );
}


/*
Выводим логические операторы

console.log(null && 2); // возвращается первое ложное значение, null
console.log(1 && 2); // возвращается последнее истиное значение, т.к. все true, 2
console.log(1 || 2); // возвращает первое истинное значение, если все true, 1
console.log(0 || null); // возвращает последнее ложное значение, null
console.log(!2);
*/
