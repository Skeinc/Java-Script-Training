// Расширение объектов
let object = { // Создадим объект, в который будем копировать свойства
    x:1
};
let source = { // Создадим объект, из которого будем копировать свойства
    x:0,
    y:2,
    z:3
};
for(let key of Object.keys(source)){
    object[key] = source[key];
}
object; // => {x: 0, y: 2, z: 3}
// Object assign
Object.assign(object, source); // => {x: 0, y: 2, z: 3}
let newObject = Object.assign({}, source); // => {x: 0, y: 2, z: 3}
// Функция похожа на Object.assign(), но не переопределяет существующие свойства
function mergeProperties(target, ...sources) {
    for(let source of sources){
        for(let key of Object.keys(source)){
            if(!(key in target)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
Object.assign({x:1}, {x:2,y:3,z:4}, {"x":1, "y": 23}); // => {x: 1, y: 23, z: 4}
mergeProperties({x:1}, {x:2,y:3,z:4}, {"x":1, "y": 23}); // => {x: 1, y: 3, z: 4}