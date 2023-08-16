// Итерация по массивам
let letters = [..."Hello world"]; // Массив букв
let string = "";
for(let element of letters) {
    string += element;
}
string; // => 'Hello world': мы повторно собрали первоначальный текст

let everyother = "";
for(let [index, element] of letters.entries()) {
    if(index % 2 === 1) {
        everyother += element; // буквы по четным индексам
    }
}
everyother ; // => 'el ol'

let uppercase = "";
letters.forEach(letterToUpperCase => {
    uppercase += letterToUpperCase.toUpperCase();
});
uppercase; // => 'HELLO WORLD'

let vowels = "";
for(let i = 0; i < letters.length; i++) {
    for(let j = 0; j < letters[i].length; j++) {
        if(letters[i][j].includes("a") || letters[i][j].includes("e") || letters[i][j].includes("i") || letters[i][j].includes("o") || letters[i][j].includes("u")) {
            vowels += letters[i][j];
        }
    }
}
vowels; // => 'eoo'

// Сохранить длину массива в локальной переменной
for(let i = 0, len = letters.length; i < len; i++) {
    // Тело цикла остается прежним
}

// Итерация в обратном направлении с конца до начала массива
for(let i = letters.length-1; i >= 0; i--) {
    // Тело цикла остается прежним
}

for(let i = 0; i < letters.length; i++) {
    if (letters[i] === undefined) continue; // Пропускать неопределенные и несуществующие элементы
}