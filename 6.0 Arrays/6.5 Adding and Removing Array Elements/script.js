// Добавление и удаление элементов массива
let arr = []; // Начать с пустого массива
arr[0] = 1; // Добавить в него элементы через присваивание значений по новым индексам
arr[1] = 2;
arr; // => (2) [1, 2]

arr.push(3); // Добавить в конец одно значение
arr.push(4,5); // Добавить в конец два значения
arr; // => (5) [1, 2, 3, 4, 5]

arr.unshift(0); // Добавить в начало элемент
arr; // => (6) [0, 1, 2, 3, 4, 5]

delete arr[3]; // Удалить элемент по индексу 3
3 in arr; // => false
arr.length; // => 6
arr; // => (6) [0, 1, 2, empty, 4, 5]

arr.pop(); // Удалить последний элемент в массиве
arr; // => (5) [0, 1, 2, empty, 4]

arr.shift(); // Удалить первый элемент в массиве
arr; // => (4) [1, 2, empty, 4]