// Преобразование типов
10 + " objects"; // => "10 objects": число 10 преобразуется в строку
"7" * "4"; // => 28: обе строки преобразуются в числа
let n = 1 - "x"; // n == NaN; строка "x" не может быть преобразована в число
n + " object"; // "NaN objects": NaN преобразуется в строку "NaN"
// Преобразования и равенство
null == undefined; // => true: эти два значения трактуются как равные
null === undefined; // => false
"0" == 0; // => true: перед сравнением булевское значение преобразуется в число
"0" === 0; // => false
0 == false; // => true: перед сравнением булевское значение преобразуется в число
"0" == false; // => true: перед сравнением оба операнда преобразуются в 0!
// Явные преобразования
Number("3"); // => 3
String(false); // => "false": либо используйте false.toString()
Boolean([]); // => true
let a = 17;
let binary = "0b" + a.toString(2); // binary == "0b10001"
let octal = "0o" + a.toString(8); // octal == "0o21"
let hex = "0x" + a.toString(16); // hex == "0x11"
let b = 123456.789;
b.toFixed(0); // => "123457"
b.toFixed(2); // => "123456.79"
b.toFixed(5); // => "123456.78900"
b.toExponential(1); // => "1.2e+5"
b.toExponential(3); // => "1.235e+5"
b.toPrecision(4); // => "1.235e+5"
b.toPrecision(7); // => "123456.8"
b.toPrecision(10); // => "123456.7890"
parseInt("3 blind mice"); // => 3
parseFloat("3.14 meters"); // => 3.14
parseInt("-12.34"); // => -12
parseInt("0xFF"); // => 255
parseInt("0xff"); // => 255
parseInt("-0xFF"); // => -255
parseFloat(".1"); // => 0.1
parseInt("0.1"); // => 0
parseInt(".1"); // => NaN: целые числа не могут начинаться с символа точки
parseFloat("$72.47"); // => NaN: числа не могут начинаться с символа доллара
// Преобразования объектов в элементарные значения
[1,2,3].toString(); // => "1,2,3"
(function(x){f(x);}).toString(); // => "function(x){f(x);}"
/\d+/g.toString(); // => "/\d+/g"
let d = new Date(2020,0,1);
d.toString(); // => "Wed Jan 01 2020 00:00:00 GMT-0800"
d = new Date(2010,0,1); // 1 января 2010 года
d.valueOf(); // => 1262332800000d