// Циклы
// while
let count = 0;
while(count < 10) {
    console.log("count = " + count);
    count++;
}

// do/while
let userAge;
do {
    userAge = Number(prompt("Пропускаем только совершенолетних!\nВведите ваш возраст"));
} while (typeof userAge !== "number" && userAge < 18);

// for
for(let i = 0; i < 10; i++) {
    console.log("i = " + i);
}
let i, j, sum = 0;
for(i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
    console.log(`sum[${i}] = ${sum}`);
}

// for/of
let data = [1,2,3,4,5,6,8,9];
for(let element of data) {
    sum += element;
    console.log("sum = " + sum);
}

let object = {
    userName: "Dima",
    userSurname: "Anufriev",
    userCity: "Nizhny Novgorod"
}
let objectKeys = "";
for(let element of Object.keys(object)) { // Вывод ключей объекта
    objectKeys += element + ", ";
}
objectKeys; // 'userName, userSurname, userCity, '

let objectValues = "";
for(let element of Object.values(object)) { // Вывод значений объекта
    objectValues += element + ", ";
}
objectValues; // 'Dima, Anufriev, Nizhny Novgorod, '

let objectEntries = "";
for(let element of Object.entries(object)) { // Вывод пар объекта
    objectEntries += element + ", ";
}
objectEntries; // 'userName,Dima, userSurname,Anufriev, userCity,Nizhny Novgorod, '

// for/of со строками
let frequency = {};
for(let letter of "mississippi") { // Подсчет частоты повторения букв
    if(frequency[letter]) {
        frequency[letter]++;
    }
    else {
        frequency[letter] = 1;
    }
}
frequency; //{m: 1, i: 4, s: 4, p: 2}

// for/of с классами Set и Map
let text = "Na na na na na na Banana!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) { // Получение уникальных слов
    unique.push(word);
}
unique; // (3) ['Na', 'na', 'Banana!']

let m = new Map([[1, "one"]]);
for(let [key,value] of m) {
    key; // => 1
    value; // => "one"
}

// Асинхронная итерация с помощью for/await
async function printStream(stream) { // Читать порции из асинхронно итерируемого потока данных и выводить их
    for await (let chunk of stream) {
        console.log(chunk);
    }
}

// for/in
for(let element in object) { // Вывод значений объекта
    console.log(object[element]);
}

let arr = [], k = 0;
for(arr[k++] in object) /* пустое тело */; // Копирование элементов объекта в массив