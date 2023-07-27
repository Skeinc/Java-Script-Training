// Перечисление объектов
let object = {
    x:1,
    y:2,
    z:3
}; // Три перечислимых собственных свойства
let newObject = Object.create(object);
newObject.type = "math";
for(let element in object) { // Проход в цикле по свойствам
    console.log(element); // Выводится x,y,z, но не toString
}
for(let element in object) {
    if(!object.hasOwnProperty(element)) continue; // Пропускать унаследованные свойства
    console.log(element); // Вывод собственных свойств
}
for(let element in object) {
    if(typeof object[element] === "function") continue; // Пропускать все методы
    console.log(element); // Вывод свойств
}
// Object.keys()
Object.keys(object); // => ['x', 'y', 'z']: возвращает массив свойств объекта
// Object.getOwnPropertyNames()
Object.getOwnPropertyNames(newObject); // => ['type']: собственное не перечислимое свойство, являющийся строкой
// Object.getOwnPropertySymbols()
Object.getOwnPropertySymbols(newObject); // => []: перечислимые или не перечислимые свойства, имена которых являются значениями Symbol
// Reflect.ownKeys()
Reflect.ownKeys(newObject); // => ['type']: возвращает массив свойств, перечислимых и не перечислимых, представленных как строками, так и значениями Symbol