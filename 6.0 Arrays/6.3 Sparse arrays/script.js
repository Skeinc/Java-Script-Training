// Разряженные массивы
let a = new Array(5); // Элементы отсутствуют
a.length; // => 5
a; // => []
a[10]; // = 0; Присваивание добавляет один элемент, но устанавливает length в 11

let a1 = [,]; // Этот массив не содержит элементов и значение length равно 1
let a2 = [undefined]; // Этот массив имеет один элемент undefined
0 in a1; // => false: a1 не содержит элемента по индексу 0
0 in a2; // => true: a2 имеет значение undefined по индексу 0