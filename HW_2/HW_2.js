'use strict';
let userString = prompt('Enter the word:', 'Test');

document.write(userString + ' ------- ' + changeRegister(userString));

function changeRegister(userString) {
  u_str = userString.split('');
  for (let i = 0; i < userString.length; i++) {
    if (u_str[i] == u_str[i].toUpperCase()) {
      u_str[i] = u_str[i].toLowerCase();
    } else {
      u_str[i] = u_str[i].toUpperCase();
    }
  }
  let outString = u_str.join('');
  return outString;
}

//Це завдання також можна зробити без методів split та join

/* function changeRegister(str) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newString += str[i].toLowerCase();
    } else {
      newString += str[i].toUpperCase();
    }
  }

  return newString;
} */

/* 
  
  Загалом завдання зроблено добре!
  Зауваження:
  1) Використовуй строгий режим - "use strict"
  2) Змінна u_str не була оголошена. (В строгому режимі була б помилка)
  3) Слід притримуватись одного стилю назв змінних (u_str слід було назвати uStr або краще userStringArr )
  4) Нема завдання -  Написати скріпт, який призведе до краху вкладки в браузері(па’ятайте про ліміти!); 
  
*/
