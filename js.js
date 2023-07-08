const firstName = prompt("Введите Ваше имя");
const secondName = prompt("Введите имя партнера");

const randomNumder = Math.floor(Math.random() * 100);

if (randomNumder < 33) {
  alert(
    `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}
    Рекомендуем поискать другой вариант...`
  );
} else if (randomNumder >= 33 && randomNumder < 66) {
  alert(
    `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}
    Неплохо, если поработать над отношениями...`
  );
} else if (randomNumder >= 66) {
  alert(
    `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}
    Отличная совместимость! Но помни, над отношениями всегда нужно работать...`
  );
} else {
  alert(
    "Упс... Что-то пошло не так... Попробуй перезапустить страницу и заново ввести имена"
  );
}
