// Булевские значения
let a = 4;
let b = true;
let c = false;
    // Пример
    if(a === 4) {
        return true;
    }
    else {
        return false;
    }
// Преобразование в Boolean
    // Преобразуются и поэтому работуют подобно false
    a = undefined;
    Boolean(a); // => false
    b = null;
    Boolean(b); // => false
    c = 0;
    Boolean(c); // => false
    a = -0;
    Boolean(a); // => false
    b = NaN;
    Boolean(b); // => false
    c = "";
    Boolean(c); // => false
    // Все остальные значения преобразуются и поэтому работают подобно true
    a = 1;
    Boolean(a); // => true
    b = " ";
    Boolean(b); // => true
    c = Infinity;
    Boolean(c); // => true