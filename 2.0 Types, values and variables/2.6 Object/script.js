// Object
let car = new Object(); // Синтаксис конструктора объекта
let city = {}; // Синтаксис литерал объекта
let user = {
    name: "Dima", // Под ключом "name" хранится значение "Dima"
    age: 20 // Под ключом "age" хранится значение 20
};
// Свойства объекта
user.name; // => "Dima"
user.age; // => 20
user.isAdmin = true; // Добавление ключа "isAdmin" со значением true
user.nation = "russian"; // Добавление ключа "nation" со значением "russian"
delete user.nation; // Удаление свойства
user["likes apples"] = true; // Добавление свойства, ключ которого состоит из нескольких слов
// for in
for(let key in user) {
    console.log(key); // Вывод наименования ключей
    console.log(user[key]); // Вывод значения ключей
}