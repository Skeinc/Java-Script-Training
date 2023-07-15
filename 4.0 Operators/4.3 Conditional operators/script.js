// Условные операторы
// if
if(true) {
    console.log("True");
}

let username = "Skezy"; // Инициализируем переменную
if(username == null) { // Если имя пользователя null или undefined
    username = "John Doe";
}

if(n === 1) {
    console.log("Вы получили 1 новое сообщение.");
}
else {
    console.log(`Вы получили ${n} новых сообщений.`);
}

if(i === j) {
    if(j === k) {
        console.log("i равно k");
    }
}
else {
    console.log("i не равно j");
}

// else if
if(n === 1) {
    // Выполнить блок кода №1
}
else if(n === 2) {
    // Выполнить блок кода №2
}
else if(n === 3) {
    // Выполнить блок кода №3
}
else {
    //Если ни одна из конструкций else не выполнилась, тогда выполнить блок кода №4
}

// switch
switch(n) {
    case 1:
        // Выполнить блок кода №1
        break;
    case 2: 
        // Выполнить блок кода №2
        break;
    case 3:
        // Выполнить блок кода №3
        break;
    default:
        // Выполнить блок кода №4, если все остальное не выполнилось
        break;
}

function convertToString(x) {
    switch(typeof x) {
        case "number": // Преобразовать число в строку методом toString()
            return x.toString();
        case "string": // Возвратить строку, заключенную в кавычки
            return '"' + x + '"';
        default: // Преобразовать любой другой тип обычным образом
            return String(x);
    }
}