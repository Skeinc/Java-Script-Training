// Длина массива
[].length; // => 0: массив не содержит элементов
["a", "b", "c"].length; // => 3: самый высокий индекс равен 2, значение length равно 3

let a = [1,2,3,4,5]; // Начать с пятиэлементного массива
a.length = 3; // => [1,2,3]: теперь элементов 3
a.length = 0; // => []: удалить все элементы
a.length = 5; // => []: Длина равна 5, но элементы отсутствуют подобно new Array(5)