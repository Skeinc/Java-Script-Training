// Методы Object
// Метод toString()
let object = {
    x:1,
    y:2
};
let str = "Hello!";
str + object; // => 'Hello![object Object]'
str = object.toString(); // => '[object Object]'
let point = {
    x:1,
    y:2,
    toString: function() {return `(${this.x}, ${this.y})`;}
};
String(point); // => '(1, 2)': toString() применяется для преобразований в строки

// Метод toLocaleString()
point = {
    x: 1000,
    y: 2000,
    toString: function() {return `(${this.x}, ${this.y})`;},
    toLocaleString: function() {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
    }
};
point.toString(); // => '(1000, 2000)'
point.toLocaleString(); // => '(1 000, 2 000)': обратите внимание на разделители у тысячных

// valueOf()
point = {
    x:3,
    y:4,
    valueOf: function() {return this.x + this.y;}
};
point.valueOf(); // => 7
Number(point); // => 7
point > 8; // => true
point == 7; // => true
point === 7; // => false

// toJSON()
point = {
    x:1,
    y:2,
    toString: function() {return `(${this.x}, ${this.y})`;},
    toJSON: function() {return this.toString();}
};
JSON.stringify(point); // => '"(1, 2)"'

// Date()
let date = new Date();
date.toString(); // => 'Sun Jul 23 2023 12:16:47 GMT+0300 (Москва, стандартное время)'
date.toLocaleString(); // => '23.07.2023, 12:16:47'
date.valueOf(); // => 1690103807391
date.toJSON(); // => '2023-07-23T09:16:47.391Z'