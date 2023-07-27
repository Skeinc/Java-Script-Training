// Сериализация объектов
const object = {
    x:1,
    y:2,
    z: [1,2,3,4,5]
};
// JSON.stringify()
let newObject = JSON.stringify(object); // Из объекта в строку
newObject; // => '{"x":1,"y":2,"z":[1,2,3,4,5]}'
// JSON.parse()
newObject = JSON.parse(newObject); // Из строки в объекта
newObject;

let o = {
    x:1,
    y: -Infinity,
    z: NaN
};
o = JSON.stringify(o); // => '{"x":1,"y":null,"z":null}'

let date = new Date();
date = JSON.stringify(date); // => '"2023-07-23T08:38:52.818Z"'