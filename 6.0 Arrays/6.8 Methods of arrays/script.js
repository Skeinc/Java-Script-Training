// Методы массивов
// Методы итераторов для массивов
// forEach()
let data = [1,2,3,4,5], sum = 0;
data.forEach(element => { // Вычислить сумму элементов массива
    sum += element;
});
sum; // => 15

data.forEach(function(value, index, arr) { // Инкрементирование каждого элемента массива
    arr[index] = value + 1;;
})
data; // = > (5) [2, 3, 4, 5, 6]

// map()
data.map(element => { // Возведение в квадрат каждого элемента массива
    return element**element;
}); // => (5) [4, 27, 256, 3125, 46656]

data.map(function (value, index, arr) { // Деление каждого элемента массива на два
    return arr[index] = value / 2;
}); // => (5) [0.5, 0.75, 1, 1.25, 1.5]

// filter()
data.filter(element => { // Возвратить массив элементов, значения которых меньше 3
    return element <= 3;
}); // => (3) [1, 2, 3]

data.filter(function(value, index, array) { // Возвратить массив элементов, значения которых четные
    return array[index] % 2 === 0;
}); // => (2) [2, 4]

data.filter(element => { // Возвратить массив элементов, состоящих без undefined и null
    return element !== undefined && element !== null;
});

// find() и findIndex()
data.findIndex(element => { // Вернуть индекс первого элемента, значение которого больше 3
    return element > 3;
}); // => 3

data.findIndex(element => { // Вернуть индекс первого элемента, значение которого меньше 0
    return element < 0; 
}); // => -1

data.find(element => { // Вернуть первый элемент, который кратен 5
    return element % 5 === 0;
}); // => 5

data.find(element => { // Вернуть первый элемент, который кратен 7
    return element % 7 === 0;
}); // => undefined

// every() и some()
data.every(element => { // Проверка значений элементов массива на принадлежность к типу данных "Числа"
    return typeof element === 'number';
}); // => true

data.every(element => { // Проверка на четность значений элементов массива
    return element % 2 === 0;
}); // => false

data.some(element => { // Проверка на четность значений элементов массива
    return element % 2 === 0; 
}); // => true

data.some(isNaN); // false: data не содержит "не числа"

// reduce() и reduceRight()
data.reduce((prevValue, currentValue) => prevValue + currentValue, 0); // => 15
data.reduce((prevValue, currentValue) => prevValue * currentValue, 1); // => 120
data.reduce((prevValue, currentValue) => prevValue * currentValue, 2); // => 240
data.reduce((prevValue, currentValue) => (prevValue > currentValue) ? prevValue : currentValue); // => 5
data.reduce((prevValue, currentValue) => (prevValue > currentValue) ? prevValue : currentValue, 10); // => 10

data.reduceRight((prevValue, currentValue) => prevValue ** currentValue); // => 59604644775390620
data.reduce((prevValue, currentValue) => prevValue ** currentValue); // => 1

// Выравнивание массивов с помощью flat() и flatMap()
let unflatArray = [1, [2, [3, [4]]]];
unflatArray.flat(); // => (4) [1, 2, [3, [4]]]
unflatArray.flat(3); // => (4) [1, 2, 3, 4]

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(element => {
    return element.split(" ");
});
words; // => (5) ['hello', 'world', 'the', 'definitive', 'guide']

unflatArray.flat(3).flatMap(element => {
    return Math.sqrt(element);
}); // => (4) [1, 1.4142135623730951, 1.7320508075688772, 2]

// Присоединение массивов с помощью concat()
data.concat(4,5); // => (7) [1, 2, 3, 4, 5, 4, 5]
data.concat([4,5], [5,6]); // => (9) [1, 2, 3, 4, 5, 4, 5, 5, 6]
data.concat(4, [5, [6, [7]]]); // => (8) [1, 2, 3, 4, 5, 4, 5, Array(2)]

// Организация стеков и очередей с помощью push(), pop(), shift() и unshift()
let stack = [];
stack.push(1); // stack = [1];
stack.push(2,3); // stack = [1,2,3];
stack.pop(); // => 3: stack = [1,2];
stack.unshift(1,2); // stack = [1,2,1,2];
stack.shift(); // => 1: stack = [2,1,2];

// Работа с подмассивами с помощью slice(), splice(), fill() и copyWithin()
// slice()
data.slice(0,3); // => (3) [1, 2, 3]
data.slice(2); // => (3) [3, 4, 5]
data.slice(-1); // => [5]
data.slice(-2); // => (2) [4, 5]
data.slice(1, -1); // => (3) [2, 3, 4]
data.slice(-3, -2); // => [3]
data.slice(-data.length-1); // => (5) [1, 2, 3, 4, 5]

// splice()
let arr = [1,2,3,4,5,6,7,8,9,10];
arr.splice(6); // => (4) [7, 8, 9, 10]: arr = [1, 2, 3, 4, 5, 6]
arr.splice(2,3); // => (3) [3, 4, 5]: arr = [1, 2, 6]
arr.splice(arr.length, 0,"hello", "world"); // => (5) [1, 2, 6, 'hello', 'world']
arr.splice(3,2, 12, 24); // => (2) ['hello', 'world']: arr = [1, 2, 6, 12, 24]

// fill()
arr = new Array(6); // Начать с массива без элементов длиной 6
arr.fill(0); // Заполнить массив нулями: arr = [0, 0, 0, 0, 0, 0]
arr.fill(1, 1); // Заполнить массив единичками, начиная с 1 индекса массива: arr = [0, 1, 1, 1, 1, 1]
arr.fill("#", 3, arr.length); // Заполнить массив "#", начиная с 3 индекса до конца массива: arr = (6) [0, 1, 1, '#', '#', '#']
arr.fill("-", 3, arr.length-1); // Заполнить массив "-", начиная с 3 индекса до последнего элемента: arr = (6) [0, 1, 1, '-', '-', '#']

// copyWithin()
arr = [1,2,3,4,5];
arr.copyWithin(2); // => (5) [1, 2, 1, 2, 3]
arr.copyWithin(0,1,3); // => (5) [2, 1, 1, 2, 3]
arr.copyWithin(0, -2); // => (5) [2, 3, 1, 2, 3]

// Методы поиска и сортировки массивов
// indexOf() и lastIndexOf()
arr = [0,1,2,1,0];
arr.indexOf(0); // => 0
arr.lastIndexOf(0); // => 4
arr.indexOf(3); // => -1: такого элемента нет
arr.indexOf(0, 1); // => 4

function findAll(arr, x) { // Ищет все вхождения значения x в массиве arr и возвращает массив индексов с совпадающими элементами
    let results = [], // Массив индексов, который будет возвращен
        len = arr.length, // Длина массива, в котором производится поиск
        pos = 0; // Позиция, с которой начинается поиск
    while(pos < len) {
        pos = arr.indexOf(x, pos); // Искать
        if(pos === -1) {
            break; // Если ничего не найдено, тогда все закончить
        }
        results.push(pos); // Иначе сохранить индекс в массиве
        pos += 1; // И начать дальнейший поиск со следующего элемента
    }
    return results; // Возвратить массив индексов
}

findAll(arr, 0); // => (2) [0, 4]

// includes()
arr = [1, true, 3, NaN];
arr.includes(true); // => true
arr.includes(2); // => false
arr.includes(NaN); // => true
arr.indexOf(NaN); // => -1: indexOf() не может отыскать NaN

// sort()
arr = ["banana", "cherry", "apple"];
arr.sort(); // => (3) ['apple', 'banana', 'cherry']

arr = [33, 4, 1111, 222];
arr.sort(); // => [1111, 222, 33, 4]: алфавитный порядок

arr.sort(function(a, b) { // Передать функцию сравнения
    return a - b; // Возвращает число < 0, 0 или > 0 в зависимости от порядка
}); // arr = [4, 33, 222, 1111]

arr.sort(function(a, b) { // Обратный числовой порядок
    return b - a;
}); // => (4) [1111, 222, 33, 4]

function bubbleSort(array) { // Пузырьковая сортировка массива
    let stepsCount = array.length-1;
    let swapped;

    do {
        swapped = false;
        // Перебираем массив и меняем местами элементы, если предыдущий больше, чем следующий
        for(let i = 0; i < stepsCount; i++) {
            if(array[i] > array[i++]) {
                // temp - временная константа для хранения текущего элемента
                const temp = array[i];
                array[i] = array[i++];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        // Уменьшаем счетчик на 1, т.к самый большой элемент уже находится в конце массива
        stepsCount--;
    }while(swapped)

    return array;
}

bubbleSort(arr); // => (4) [4, 33, 222, 1111]

arr = ["ant", "Bug", "cat", "Dog"];
arr.sort(); // => (4) ['Bug', 'Dog', 'ant', 'cat']

arr.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a < b) return - 1;
    if(a > b) return 1;
    return 0;
}); // => (4) ['ant', 'Bug', 'cat', 'Dog']

// reverse()
arr = [1,2,3];
arr.reverse(); // => (3) [3, 2, 1]

// Преобразования массивов в строки
arr = [1,2,3];
arr.join(); // => '1,2,3'
arr.join(" "); // => '1 2 3'
arr.join(""); // => '123'
let b = new Array(10); // Массив с длиной 10 без элементов
b.join(" -_- "); // => ' -_-  -_-  -_-  -_-  -_-  -_-  -_-  -_-  -_- '

[1,2,3].toString(); // => '1,2,3'
["a", "b", "c"].toString(); // => "a,b,c"
["a", 2, true].toLocaleString(); // => 'a,2,true'

// Статические функции массивов
Array.isArray([1,2]); // => true
Array.isArray({}); // => false

// Объекты, похожие на массивы
let obj = {}; // Начать с обыкновенного пустого объекта
for(let i = 0; i < 10; i++) {
    obj[i] = i*i;
}
obj.length = 10;

let total = 0; // Выполним итерацию по объекту, как если бы он был настоящим массивом
for(let i = 0; i < obj.length; i++) {
    total += obj[i];
}

function isArrayLike(object) { // Определяет, является ли object объектом, похожим на массив
    if( object &&
        typeof object === "object" &&
        Number.isFinite(object.length) &&
        object.length >= 0 &&
        Number.isInteger(object.length) &&
        object.length < 4294967295) {
            return true; // Тогда объект object похож на массив
        }
        else {
            return false; // Иначе объект object не похож на массив
        }
}
isArrayLike(obj); // => true

Array.prototype.join.call(obj, "-"); // => '0-1-4-9-16-25-36-49-64-81'
Array.prototype.map.call(obj, element => {
    return element * element;
}); // => (10) [0, 1, 16, 81, 256, 625, 1296, 2401, 4096, 6561]
Array.prototype.slice.call(obj, 1, 8); // => (7) [1, 4, 9, 16, 25, 36, 49]
Array.from(obj); // => (10) [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

// Строки как массивы
let str = "Hello, JavaScript!";
str.charAt(10); // => 'a'
str[14]; // => 'i'

Array.prototype.join.call(str, "-"); // => 'H-e-l-l-o-,- -J-a-v-a-S-c-r-i-p-t-!'
Array.prototype.map.call(str, element => {
    return element += element.toUpperCase();
}); // => (18) ['HH', 'eE', 'lL', 'lL', 'oO', ',,', '  ', 'JJ', 'aA', 'vV', 'aA', 'SS', 'cC', 'rR', 'iI', 'pP', 'tT', '!!']

let temp = []; // Буффер
for(let element in str) {
    temp.push(element);
} // temp = (18) ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']

temp = []; // Очищение буффера
for(let element of str) {
    temp.push(element);
} // temp = (18) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', '!']

for(let element in str){
    console.log(str[element]); // => ['H', 'e', 'l', 'l', 'o', ',', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', '!']
}