// Расширенный синтаксис объектных литералов
// Сокращенная запись свойств
let [x,y] = [1,2];
let object = {
    x: x,
    y: y
};
let o = {x,y}; // В ES6 можно отбросить двоеточие и одну копию идентификатора
o.x + o.y; // => 3

// Вычисляемые имена свойств
const PROPERTY_NAME = "p1";
function computePropertyName() {return "p" + 2;}
o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

const PROPERTY_NAME2 = "p1";
function computePropertyName2() {return "p" + 2};
let p = { // В ES6 можно переместить квадратные скобки прямо во внутрь объектного литерала
    [PROPERTY_NAME2]: 1,
    [computePropertyName2()]: 2
};
p.p1 + p.p2; // => 3

// Символы в качестве имен свойств
const extension = Symbol("my extensions symbol");
o = {
    [extension]: {/* В этом объекте хранятся данные для расширения */}
};
o[extension].userName = "Dmitry"; // Это не будет конфликтовать с остальными свойствами o

// Операция распространения
let position = {x: 0, y: 0};
let dimensions = {width: 100, height: 75};
let rect = {...position, ...dimensions};
rect.x + rect.y + rect.width + rect.height; // => 175

o = {x: 1};
p = {x: 0, ...o};
p.x; // => 1: значение из объекта o переопределяет начальное значение
let q = {...o, x: 2};
q.x; // => 2: значение 2 переопределяет предыдущее значение из o

// Сокращенная запись методов
let square = {
    area: function() {return this.side * this.side;},
    side: 10
};
square.area(); // => 100

square = { // В ES6 мы можем опустить ключевое слово function и двоеточие для создания метода
    area() {return this.side * this.side},
    side: 10
};
square.area(); // => 100

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method With Spaces"(x) {return x + 1;},
    [METHOD_NAME] (x) {return x + 2;},
    [symbol] (x) {return x + 3;}
};
weirdMethods["method With Spaces"](1); // => 2
weirdMethods[METHOD_NAME](1); // => 3
weirdMethods[symbol](1); // => 4

// Методы получения и установки свойств
o = {
    // Обыкновенное свойство с данными
    dataProp: value,
    // Свойство с методами доступа определяется как пара функций
    get accessorProp() {return this.dataProp;},
    set accessorProp(value) {this.dataProp = value;}
};

let point = {
    // x и y - обыкновенные свойства с данными, допускающие чтение и запись
    x: 1.0,
    y: 1.0,
    // r - свойство с методами доступа, допускающее чтение и запись с методами получения и установки
    // Не забывайте помещать запятую после методов доступа
    get r() {return Math.hypot(this.x, this.y);},
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    // theta - свойство с методами доступа, допускающее только чтение и имеющее лишь метод получения
    get theta() {return Math.atan2(this.x, this.y);}
};
point.r; // => Math.SQRT2
point.theta; // => Math.PI/4

q = Object.create(point); // Новый объект, который наследует методы получения и установки
q.x = 3; q.y = 4; // Создать в q собственные свойства с данными
q.r; // => 5
q.theta; // 0.6435011087932844

// Этот объект генерирует строго увеличивающиеся порядковые номера
const serialnum = {
    // Свойство с данными, которое хранит следующий порядковый номер. Символ _ в имени свойства подсказывает, что оно предназначено только для внутреннего использования.
    _n: 0,
    // Возвратить текущее значение и инкрементировать его
    get next() {return this._n++;},
    // Установить новое значение n, но только если оно больше текущего
    set next(n) {
        if(n > this._n) this._n = n;
        else throw new Error("Порядковый номер можно устанавливать только в более значение");
    }
};
serialnum.next = 10; // Установить начальный порядковый номер
serialnum.next; // => 10
serialnum.next; // => 11

// Этот объект имеет свойства с методами доступа, которые возвращают случайные числа.
const random = {
    get rndInt() {return Math.round(Math.random() * 100);}
};
random.rndInt; // => рандомное целое число