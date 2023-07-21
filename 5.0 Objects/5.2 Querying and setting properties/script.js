// Запрашивание и установка свойства
let book = {
    "main title": "JavaScript", // Имена этих свойств включают пробелы и дефисы, а поэтому для них используются строковые литералы
    "sub-title": "The Definitive Guide",
    for: "all audiences", // for - зарезервированное слово, но без кавычек
    "author": { // Значением свойства this является сам этот объект
        firstname: "David",
        surname: "Flanagan"
    }
};

let author = book.author; // Получить свойство "author" объекта book: {firstname: 'David', surname: 'Flanagan'}
let name = author.surname; // Получить свойство "surname" объекта author: name === "Flanagan"
let title = book["main title"]; // Получить свойство "main title" объекта book
book.edition = 7; // Создать свойство "edition" объекта book
book["main title"] = "ECMAScript"; // Изменить свойство "main title"

// Объекты как ассоциативные массива
book.author; // => {firstname: 'David', surname: 'Flanagan'}
book["author"] // => {firstname: 'David', surname: 'Flanagan'}

let customer = {
    address0: "Moscow",
    address1: "Nizhny Novgorod",
    address2: "Kiev",
    address3: "Minsk"
}
// Код читает и производит конкатенацию свойств address0, address1, address2, address3 объекта customer
let addr = "";
for(let i = 0; i < Object.entries(customer).length; i++) {
    addr += customer[`address${i}`];
} // => 'MoscowNizhny NovgorodKievMinsk'

let investor = {
    userInformation: {
        name: 'Dmitry',
        surname: 'Anufriev',
        age: 20,
        gender: 'Male'
    },
    portfolio: {
        // Акции компаний
        "ibm": 50,
        "nike": 100,
        "adidas": 200
    }
}
// Функция для добавления нового пакета акций в портфель ценных бумаг
function addstock(object, stockname, shares) {
    object.portfolio[stockname] = shares;
}

// Как можно было бы использовать цикл for/in при подсчете общей стоимости портфеля ценных бумаг:
let stocks = {
    "ibm": 13.25,
    "nike": 98.32,
    "adidas": 54.32
}
function computeValue(portfolio) {
    let total = 0.0;
    for(let stock in portfolio) { // Для каждого пакета акций в портфеле ценных бумаг:
        let shares = portfolio[stock]; // Получить количество акций
        let price = stocks[stock]; // Найти курс акций
        total += shares * price; // Добавить стоимость пакета акцией к общей стоимости
    }
    return total;
}

computeValue(investor.portfolio); // => 21358.5: Общая стоимость портфолио с акциями

// Наследование
let object = {}; // object наследует методы объекта от Object.prototype
object.x = 1; // Теперь объект object имеет собственное свойство x
let point = Object.create(object); // Объект point наследует свойства от объекта object и Object.prototype
point.y = 2; // Теперь объект point имеет собственное свойство y
let q = Object.create(point); // Объект q наследует свойство от объекта point, object и Object.prototype
q.z = 3; // Теперь объект q имеет собственное свойство z
let f = q.toString(); // toString() наследуется от Object.prototype
q.x + q.y; // => 3: x и y наследуются от object и point

let unitcircle = {r: 1}; // Объект, от которого будет делаться наследование
let c = Object.create(unitcircle); // c наследует свойство r
c.x = 1; c.y = 1; // c определяет два собственных свойства
c.r = 2; // c переопределяет свое унаследованное свойство
unitcircle.r; // 1: прототип не затронут

// Ошибки доступа к свойствам
book.subtitle; // => undefined: свойство не существует
let len = book.subtitle.length; // !TypeError: undefined не имеет свойства length
// Многословная и явная методика
let surname = undefined;
try {
    if(book) {
        if(book.author) {
            surname = book.author.surname;
        }
        else {
            throw new Error("author не определен");
        }
    }
    else {
        throw new Error("book не определена");
    }
}
catch(err) {
    alert(err);
}
// Лаконичная и идиоматическая альтернатива для получения surname либо null или undefined
surname = book && book.author && book.author.surname;
// Условный доступ к свойствам
surname = book?.author?.surname;