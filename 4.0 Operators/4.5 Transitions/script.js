// Переходы
// Помеченные операторы
mainloop: while(token !== null) {
    // Код опущен...
    continue mainloop; // Перейти к следующей итерации именованного цикла
    // Код опущен...
}

// break
for(let i = 0; i < a; i++) {
    if(a[i] === target) break;
}

let matrix = [[1,2], [2,3], [3,4], [4,5]]; // Двумерный массив чисел
let sum = 0, success = false; // Просуммировать все числа в матрице
// Начать с помеченного оператора, из которого можно выйти в случае возникновения ошибки
computeSum: if(matrix) {
    for(let x = 0; i < matrix.length; x++) {
        let row = matrix[x];
        if(!row) break computeSum;
        for(let y = 0; y < row.length; y++) {
            let cell = row[y];
            if(isNaN(cell)) break computeSum;
            sum += cell;
        }
    }
    success = true;
}
// Операторы break переходят сюда. Если мы оказываемся здесь с success == false, тогда с матрицей что-то пошло не так. В противном случае sum содержит сумму всех ячеек матрицы

// continue
for(let i = 0; i < data.length; i++) {
    if(!data[i]) continue; // Не удается продолжить с неопределенными данными
    total += data[i];
}

checkNumber: for(let i = 0; i < 10; i++) {
    if(i < 5) continue checkNumber;
    console.log("i > 5!");
}

// return
function getMinMax(arr) {
    let minElement = arr[0], maxElement = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minElement) {
            minElement = "Минимальное значение массива: " + arr[i];
        }
        else if(arr[i] > maxElement) {
            maxElement = "Максимальное значение массива: " + arr[i];
        }
    }
    return {minElement, maxElement};
}

// yield
function* range(from, to) { // Генераторная функция, которая выдает диапазон целых чисел
    for(let i = from; i <= to; i++) {
        yield i;
    }
}

// throw
function factorial(x) {
    // Если входной аргумент не является допустимым, то сгенерировать исключение!
    if(x < 0 || typeof x !== "number") throw new Error("Недопустимое значение");
    // Иначе вычислить и возвратить значение обычным образом
    let f;
    for(f = 1; x > 1; f *= x, x--) /* пустое тело */;
    return f;
}
factorial(4); // => 24
factorial("123"); // Uncaught Error: Недопустимое значение

// try/catch/finally
try {
    // В нормальной ситуации этот код выполняется от начала до конца блока безо всяких проблем. Но иногда он может генерировать исключение, либо напрямую с помощью
    //оператора throw, либо косвенно за счет вызова метода, который генерирует исключение
}
catch(err) {
    // Операторы в данном блоке выполняются, если и только если в блоке try было сгенерировано исключение. Эти операторы могут использовать локальную переменную err
    // для ссылки на объект Error или другое значение, которое было указано в throw. В блоке можно каким-то образом обработать исключение, проигнорировать его, ничего
    // не делая, или повторно сгенерировать исключение с помощью throw
}
finally {
    // Данный блок содержит операторы, которые всегда выполняются независимо от того, что произошло в блоке try. Они выполняются при завершении блока try:
    // 1) нормальным образом после того, как достигнут конец блока;
    // 2) из-за оператора break, continue или return;
    // 3) из-за исключения, которое было обработано конструкцией catch выше;
    // 4) из-за необработанного исключения, которое продолжило свое распространение.
}

try {
    // Запросить у пользователя ввод числа
    let number = Number(prompt("Введите положительное число"));
    if(number < 0) {
        throw new Error("Ошибка! Введите положительное число!");
    }
    console.log("Ваше число: " + number);
}
catch(error) {
    // Если введеное пользователем число было недопустимым, то мы оказываемся здесь
    alert(error);
}

emulationCycleFor: {let i = 0; // Инициализация
    while(i < 10) { // Проверка
        try { // Тело цикла
            console.log(i);
        }
        finally {
            i++; // Инкрементирование
        }
    }
}

// Пустые конструкции catch
function parseJSON(str) {
    try {
        return JSON.parse(str);
    }
    catch {
        // Что-то пошло не так, но нас не интересует, что именно
        return undefined;
    }
}