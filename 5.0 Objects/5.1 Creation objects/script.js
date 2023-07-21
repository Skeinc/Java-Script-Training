// Создание объектов
// Объектные литералы
let emptyObj = {}; // Объект без свойств
let pointObj = {
    x:0,
    y:0
}; // Два числовых свойства
let point2Obj = {
    x:pointObj.x,
    y:pointObj.y + 1
}; // Более сложные значения
let book = {
    "main title": "JavaScript", // Имена этих свойств включают пробелы и дефисы, а поэтому для них используются строковые литералы
    "sub-title": "The Definitive Guide",
    for: "all audiences", // for - зарезервированное слово, но без кавычек
    "author": { // Значением свойства this является сам этот объект
        firstname: "David",
        surname: "Flanagan"
    }
};

// Создание объектов с помощью операции new
let newObj = new Object(); // Создает пустой объект: то же, что и newObj = {}
let newArr = new Array(); // Создает пустой массив: то же, что и newArr = []
let newDate = new Date(); // Создает объект Date, представляющий текущее время
let newMap = new Map(); // Создает объект Map для отображения ключ/значение

// Прототипы
function createPerson(first, last, age, gender, country, city, interests) {
    this.personalInformation = {
        'name': first + " " + last,
        'age': age,
        'gender': gender
    }
    this.locateInformation = {
        'country': country,
        'city': city
    }
    this.interestsInformation = {
        'interests': interests
    }
}

let newPerson1 = new createPerson('Dmitry', 'Anufriev', 20, 'Male', 'Russia', 'Nizhny Novgorod', ["programming", "sport", "politic"]); // Создадим экземпляр объекта

newPerson1.valueOf(); // => createPerson {personalInformation: {…}, locateInformation: {…}, interestsInformation: {…}}

createPerson.prototype; // => {constructor: ƒ} constructor: ƒ createPerson(first, last, age, gender, country, city, interests)
Object.prototype; // => {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

let newPerson2 = Object.create(newPerson1);
newPerson2.__proto__; // => createPerson {personalInformation: {…}, locateInformation: {…}, interestsInformation: {…}}

newPerson1.constructor;
newPerson2.constructor;

let newPerson3 = new newPerson1.constructor('Misha', 'Prusakov', 19, 'Male', 'Russia', 'Nizhny Novgorod', ['programming', 'sport']);

// Object.create()
let object1 = {x:1, y:2}; // Создание объекта при помощи объектного литерала
let object2 = Object.create(object1); // object2 наследует свойства x и y
object2.x + object2.y; // => 3
let object3 = Object.create(null); // object3 не наследует ни свойства, ни методы, данный объект не имеет прототипа
let object4 = Object.create(Object.prototype); // object4 подобен object4 = {} или object4 = new Object(), данный объект имеет прототип Object
let object5 = {x: "Не изменяйте это значение"};
library.function(Object.create(object5)); // Защита от случайно модификации