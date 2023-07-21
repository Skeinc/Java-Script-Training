// Удаление свойства
let book = {
    "main title": "JavaScript", // Имена этих свойств включают пробелы и дефисы, а поэтому для них используются строковые литералы
    "sub-title": "The Definitive Guide",
    for: "all audiences", // for - зарезервированное слово, но без кавычек
    "author": { // Значением свойства this является сам этот объект
        firstname: "David",
        surname: "Flanagan"
    }
};

delete book.author; // Объект book теперь не имеет свойства author
delete book["main title"]; // А теперь он не имеет и свойства "main title"

let object = {x:1}; // object имеет собственное свойство x и наследует свойство toString
delete object.x; // => true: свойство x удаляется
delete object.x; // => true: ничего не делает (х не существует), но в любом случае true
delete object.toString; // => true: ничего не делает (toString - не собственное свойство)
delete 1; // => true: бессмысленно, но в любом случае true

// В строгом режиме все показанные ниже удаления генерируют TypeError, а не возвращают false
delete Object.prototype; // => false: свойство не допускает конфигурирование
var x = 1; // Объявление глобальной переменной
delete globalThis.x; // => false: это свойство нельзя удалить
function f() {}; // Объявление глобальной функции
delete globalThis.f; // => false: это свойство тоже нельзя удалить

globalThis.x = 1; // Создать конфигурируемое свойство глобального объекта
delete globalThis.x; // => true: это работает