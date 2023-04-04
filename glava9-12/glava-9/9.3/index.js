// Класс расширяет объект?

// важность: 3
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.
// Пример:

// class Rabbit {
// constructor(name) {
// this.name = name;
// }
// }

// let rabbit = new Rabbit("Rab");

// // метод hasOwnProperty от Object.prototype
// alert( rabbit.hasOwnProperty('name') ); // true
// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

// class Rabbit extends Object {
// constructor(name) {
// this.name = name;
// }
// }

// let rabbit = new Rabbit("Кроль");

// alert( rabbit.hasOwnProperty('name')

Решение:

class Rabbit {}

alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
alert( Rabbit.__proto__ === Object ); // (2) false (!)
alert( Rabbit.__proto__ === Function.prototype ); // как у каждой функции по умолчанию

// ошибка - нет такой функции у Rabbit
alert( Rabbit.getOwnPropertyNames({a: 1, b: 2}) ); // Ошибка
