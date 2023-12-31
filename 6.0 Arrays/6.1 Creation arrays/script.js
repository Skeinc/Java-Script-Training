// Создание массивов
// Литералы типа массивов
let empty = []; // Массив без элементов
let primes = [2,3,5,7,11]; // Массив с пятью числовыми элементами
let misc = [1.1, true, "a",]; // Три элемента различных типов плюс хвостовая запятая
let base = 1024;
let table = [base, base+1, base+2, base+3]; // Значения массива не обязательно должны быть константами, они могут быть произвольными выражениями
let b = [[1, {
    x:1,
    y:2
}], 2, {
    x:3,
    y:4
}]; // Литералы типа массивов могут содержать объектные литералы или другие литералы типа массивов
let count = [1,,3]; // Элементы находятся по индексам 0 и 2, по индексу 1 элемента нет
let undefs = [,,]; // Массив, не содержащий элементов, но имеющий длину 2

// Операция распространения
let a = [1,2,3];
b = [0, ...a, 4]; // b == [0,1,2,3,4]
let original = [1,2,3];
let copy = [...original];
copy[0] = 0; // Модификация копии не приводит к изменению оригинала
original[0]; // => 1
let digits = [..."0123456789ABCDEF"];
digits; // => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let letters = "hello world!";
[...new Set(letters)]; // => ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd', '!']

// Конструктор Array()
let arr1 = new Array(); // Вызов без аргументов: создаст пустой массив и эквивалентен литералу массива []
let arr2 = new Array(10); // Вызов с одиночным числовым аргументов, который указывает длину
let arr3 = new Array(5,4,3,2,1, "testing, testing"); // Явное указание двух и более элементов массива или одиночного нечислового элемента

// Array.of()
Array.of(); // => []; при вызове без аргументов возвращает пустой массив
Array.of(10); // => [10]; при вызове с единственным числовым аргументов способна создавать массивы
Array.of(1,2,3); // => [1,2,3]

// Array.from()
copy = Array.from(original);