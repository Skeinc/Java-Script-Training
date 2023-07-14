// Условная операция (?:)
let greeting = "hello " + (username ? username : "there"); // Код эквивалентен коду ниже
greeting = "hello ";
if(username) {
    greeting += username;
}
else {
    greeting += "there";
}

// Операция выбора первого определенного операнда (??)
let options = {
    timeout: 0,
    title: "",
    verbose: false,
    n: null
}
options.timeout ?? 1000; // => 0: как определено в объекте
options.title ?? "Untitled"; // => "": как определено в объекте
options.verbose ?? true; // => false: как определено в объекте
options.quite ?? false; // => false: свойство не определено
options.n ?? 10; // => 10: свойство n равно null

// Операция typeof
value = 123;
typeof value; // => "number"
(typeof value === "string") ? "'" + value + "'": value.toString();

// Операция delete
let o = { // Создадим объект
    x:1,
    y:2
};
delete o.x; // Удалить одно из свойств объекта
"x" in o; // => false: свойства не существует в объекте

let a = [1,2,3]; // Создадим массив
delete a[2]; // Удалим элемент массива
2 in a; // => false: элемента не существует в массива
a.length; // => 3

// Операция void
let counter = 0;
const increment = () => void counter++;
increment(); // => undefined
counter; // => 1

// Операция "запятая"
for (let i = 0, j = 10; i < 10; i++, j--) {
    console.log(`${i} + ${j} = `,  i + j);
}