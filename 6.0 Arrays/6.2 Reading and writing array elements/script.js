// Чтение и запись элементов массива
let a = ["world"]; // Начать с одноэлементного массива
let value = a[0]; // Прочитать элемент 0
a[1] = 3.14; // Записать элемент 1
let i = 2;
a[i] = 3; // Записать элемент 2
a[i+1] = "hello"; // Записать элемент 3
a[a[i]] = a[0]; // Прочитать элементы 0 и 2, записать элемент 3
a; // => ['world', 3.14, 3, 'world']
a.length; // => 4

let obj = {};
obj[1] = "hi!";
obj["1"]; // => "hi!": числовые и строковые имена свойств считаются одинаковыми

a[-1.23] = true; // Это создает свойство по имени "-1.23"
a["10"] = 0; // Это 11 элемент массива
a[1.000] = 1; // Индекс массива 1
a; // => ['world', 1, 3, 'world', empty × 6, 0, -1.23: true]

a = [true,false];
a[2]; // => undefined: элемент по такому индексу отсутствует
a[-1]; // => undefined: свойство с таким именем не существует