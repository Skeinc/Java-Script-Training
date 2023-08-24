// Определение функций
// Объявления функций
function printProperties(obj) { // Функция для вывода ключей и значений объекта
    for(let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
};
printProperties({username: "Dmitry", userage: 20, usercountry: "Russian Federation"}); // => username: Dmitry userage: 20 usercountry: Russian Federation

function getFactorial(x) { // Рекурсивная функция для факториала
    if(x < 1) return false;
    if(x === 1) return 1;
    return x * getFactorial(x-1);
};
getFactorial(5); // => 120

function getDiscriminant(a,b,c) { // Формула для нахождения дискриминанта
    return Math.pow(b,2) - 4*a*c;
};
getDiscriminant(2,4,8); // => -48

// Выражения функций
const square = function (x) { // Функция, возвращающая квадрат числа
    if(typeof x !== 'number') return false;
    return x*x;
};
square(5); // => 25

const factorial = function(x) { // Функция, возвращающая факториал числа
    if(x < 1) return false;
    if(x === 1) return 1;
    let result = 1;
    while(x > 1) {
        result *= x;
        x--;
    }
    return result;
}
factorial(5);

// Стрелочные функции
const sum = (x,y) => { // Функция, возвращающая сумму двух параметров
    return x + y;
};
sum(1,2); // => 3

const difference = (x,y) => { // Функция, возвращающая разницу двух параметров
    return x = y;
};
difference(1,2); // => -1

const polynomial = x => x*x+2*x+3;
polynomial(3); // => 18

const returnObject = x => {
    return {value: x};
};
returnObject(5); // => {value: 5}

let filtered = [1, null, 2, 3].filter(x => { // Создать копию массива, не содержащую элементы null
    return x !== null;
});
filtered; // => (3) [1, 2, 3]

let squares = [1,2,3,4,5,6,7,8,9,10].map(element => { // Возвести в квадрат ряд чисел
    return element*element;
});
squares; // => (10) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Вложенные функции
function hypotenuse(a,b) {
    function square(x) {
        return x*x;
    }
    return Math.sqrt(square(a) + square(b));
}

hypotenuse(3,4); // => 5