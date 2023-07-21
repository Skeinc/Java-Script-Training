// Проверка свойств
let object = {x:1};
"x" in object; // => true: object имеет собственное свойство "x"
"y" in object; // => false: object не имеет свойства "y"
"toString" in object; // => true: object наследует свойство toString

object.hasOwnProperty("x"); // => true: object имеет собственное свойство "x"
object.hasOwnProperty("y"); // => false: object не имеет свойства "y"
object.hasOwnProperty("toString"); // => false: toString - унаследованное свойство

object.propertyIsEnumerable("x"); // => true: object имеет собственное перечислимое свойство x
object.propertyIsEnumerable("toString"); // => false: не собственное свойство
Object.prototype.propertyIsEnumerable("toString"); // => false: собственное свойство, но не перечислимое

object.x !== undefined; // => true: object имеет свойство x
object.y !== undefined; // => false: object не имеет свойство y
object.toString !== undefined; // => true: object наследует свойство toString

let point = {x: undefined, y:1};
point.x !== undefined; // => false: свойство существует, но все равно undefined
"x" in point; // => true: свойство существует
delete point.x; // Удаление свойства x
"x" in point; // => false: свойство больше не существует