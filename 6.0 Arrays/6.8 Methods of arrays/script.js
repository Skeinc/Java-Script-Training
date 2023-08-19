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