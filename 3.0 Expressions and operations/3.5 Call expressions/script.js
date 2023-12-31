// Выражения вызова
f(0); // f - выражение функции; 0 - выражение аргумента
Math.max(x,y,z); // Math.max - функция; x,y и z - аргументы
a.sort(); // a.sort() - функция; аргументы отсуствуют

// Условный вызов
function square(x, log) {
    if(log) { // Если необязательная функция передана, тогда вызвать ее
        log(x);
    }
    return x*x; // Возвратить квадрат аргумента
}
function square(x,log) {
    log?.(x); // Вызвать функцию, если она есть
    return x*x; // Возвратить квадрат аргумента
}
let [f,x] = [null,0];
try {
    f(x++); // Генерируется TypeError, потому что f равно null
} catch(error) {
    x; // => 1: x инкреминтируется перед генерацией исключения
}
f?.(x++); // => undefined: f равно null, но никакие исключения не генерируются
x; // => 1: инкрементирование пропускается из-за короткого замыкания
o.m(); // Обыкновенный доступ к свойству, обыкновенный вызов
o?.m(); // Условный доступ к свойству, обыкновенный вызов
o.m?.(); // Обыкновенный доступ к свойству, условный вызов
o?.m?.(); // Условный доступ к свойству, условный вызов