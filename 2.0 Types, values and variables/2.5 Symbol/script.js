// Symbol
let strname = "string name"; // Строка для применения в качестве имени свойства
let symname = Symbol("propname"); // Символ для использования в качестве имени свойства
typeof strname; // => "string"
typeof symname; // => "symbol"
let o = {}; // Создание нового объекта
o[strname] = 1; // Определить свойство со строковым именем
o[symname] = 2; // Определить свойство с именем Symbol
o[strname]; // => 1: доступ к свойству со строковым именем
o[symname]; // => 2: доступ к свойству с символьным именем

// toString()
let s = Symbol("sym_x"); // Символ
s.toString(); // "Symbol(sym_x)"

// Symbol.for()
let sym1 = Symbol.for("shared");
let sym2 = Symbol.for("shared");
let sym3 = Symbol("shared");
let sym4 = Symbol("shared");
sym1 === sym2; // => true
sym3 === sym4; // => false

// Symbol.keyFor()
sym1.toString(); // => "Symbol(shared)"
Symbol.keyFor(sym1); // => "shared"