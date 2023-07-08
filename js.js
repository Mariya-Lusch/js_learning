const firstName = prompt("Введите Ваше имя");
const secondName = prompt("Введите имя партнера");

const randomNumder = Math.floor(Math.random() * 100);

alert(
  `Результат совестимости ${firstName} и ${secondName} равен ${randomNumder}`
);
