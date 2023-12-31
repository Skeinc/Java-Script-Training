// Выражения присваивания
let i = 0; // Установить переменную i в 0
let o = {x:null}; // Объявление переменной o, которая ссылается на объект
o.x = 1; // Установить свойство х объекта o в 1
(a = b) === 0; // true, когда a === 0
i = j = k = 0; // Инициализация трех переменных значением 0

// Присваивание с действием
let [total, salesTax] = [100, 5]; // Деструктуризация
total += salesTax; // => 105
total = total + salesTax; // => 105
let data = [1,2,3,4,5,6,7,8,9,10]; // Объявление массива
for(let i = 0; i < data.length; i++) {
    data[i] *= 2;
    console.log(data[i]);
}
console.log(data);