/*
ОПИСАНИЕ ЗАДАНИЯ:

Вам нужно вычислить победителя среди двух команд.
Представим 2 комманды по плаванию - "crazyKats" и "funnyDucks"

Каждая из комманд показала 3 итоговых результата, в трех заплывах. Например crazyKats показали три резултата (30, 60, 43).

Одна из комманд побеждает только в том случае, если среднее количесто очков по итогам трех результатов, минимум в 2 раза больше чем у соперника. Иначе ничья

ЗАДАЧА:

    1. Создайте стрелочную функцию которая будет считать среднее значение, 3-х результатов комманды. Расчитывается по формуле:
    "(res1 + res2 + res3) / 3"

    2. Используйте созданную функцию чтобы получить средний результат 2-х комманд.
    
    3. Создайте функцию с двумя параметрами - которые будут принимать аргументы из результата среднего значения очков комманд. В этой функции создайте вариацию условий, которые помогут определить победителя с помощью if/ else if и вывести сообщение с результатом в консоль.

ДАННЫЕ ДЛЯ ЗАДАЧИ:

    Первый вариант: "crazyKats"- 44, 23, 71  "funnyDucks" 65, 54, 49
    Второй вариант: "crazyKats"- 85, 54, 41  "funnyDucks" 23, 34, 27


*/

// Первый вариант
const calcAverage = (res1, res2, res3) => (res1 + res2 + res3) / 3;

let scoreKats = calcAverage(44, 23, 71);
let scoreDucks = calcAverage(65, 54, 49);

function whoIsWiner(avgKats, avgDucks) {
  if (avgKats >= 2 * avgDucks) {
    console.log(
      `Победа crazyKats с результатом ${avgKats} против funnyDucks с результатом ${avgDucks}`
    );
  } else if (avgDucks >= 2 * avgKats) {
    console.log(
      `Победа funnyDucks с результатом ${avgDucks} против crazyKats с результатом ${avgKats}`
    );
  } else {
    console.log("Сегодня ничья, и это тоже победа!");
  }
}

whoIsWiner(scoreKats, scoreDucks);

// Второй вариант
scoreKats = calcAverage(85, 54, 41);
scoreDucks = calcAverage(23, 34, 27);

whoIsWiner(scoreKats, scoreDucks);
