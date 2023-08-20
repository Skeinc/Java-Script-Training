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