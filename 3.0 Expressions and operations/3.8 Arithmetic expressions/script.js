// Арифметические выражения
2 ** 3; // => 8
2 * 3; // => 8
4 / 2; // => 2
4 % 2; // => 0
4 + 2; // => 6
4 - 2; // => 2

// Операция +
1 + 2; // => 3: сложение
"hello" + ", " + "world!"; // => "hello, world!": конкатенация
"1" + "2"; // => "12": конкатенация
"1" + 2; // => "12": конкатенация после преобразования числа в строку
1 + {}; // "1[object Object]": конкатенация после преобразования объекта в строку
true + true; // => 2: сложение после преобразования булевского значения в число
2 + null; // => 2: сложение после преобразования null в 0
2 + undefined; // => 2: сложение после преобразования undefined в 0
1 + 2 + " blind mice"; // => "3 blind mice"
1 + (2 + " blind mice"); // => "12 blind mice"

// Унарные арифметические операции
let str = "123";
+str; // => 123: унарный плюс
-str; // => -123: унарный минус
    // Инкремент
    let i = 1, j = ++i; // i и j равны 2
    let n = 1, m = n++; // n равно 2, m равно 1
    // Декремент
    i = 2, j = --i; // i и j равны 1
    n = 2, m = n--; // n равно 1, m равно 2

// Побитовые операции
0x1234 & 0x00FF; // => 0x0034: побитовое И (&)
0x1234 | 0x00FF; // => 0x12FF: побитовое ИЛИ (|)
0xFF00 ^ 0xF0F0; // => 0x0FF0: побитовое исключающее ИЛИ (^)
~0x0F; // => 0xFFFFFFF0: побитовое НЕ (~)
7 << 2; // => 28: 7 * 4 = 28: Сдвиг влево (<<)
7 >> 1; // => 3: 7 // 2 = 3: Сдвиг вправо с расширением знака (>>)
-1 >>> 4; // => 0x0FFFFFFF: Сдвиг вправо с дополнением нулями (>>>)