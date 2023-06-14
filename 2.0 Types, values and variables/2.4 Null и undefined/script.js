// null
let userName = null;
typeof userName; // => Object: null можно считать особым объектным значением, которое служит признаком "отсутствия объекта"

// undefined
let userAge;
typeof userAge; // => undefined
userName = undefined;
typeof userName; // => undefined

// Сравнение
userName = null;
userName == userAge; // => true
userName === userAge; // => false