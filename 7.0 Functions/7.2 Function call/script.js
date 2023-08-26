// Вызов функций
function factorial(x) {
    if(x < 1) return 1;
    return x * factorial(x-1);
}

let total = factorial(5) + factorial(10); // total = 3628920

// Условный вызов
function returnNull() {
    return null;
}
(returnNull !== null && returnNull !== undefined) ? returnNull() : console.log("returnNull === null или returnNull === undefined"); // => null
returnNull = null; // Присвоим значение null
(returnNull !== null && returnNull !== undefined) ? returnNull() : console.log("returnNull === null или returnNull === undefined"); // => returnNull === null или returnNull === undefined

// Определение и вызов функции для выяснения, находимся ли мы в строгом режиме
const strict = (function() {
    return !this;
}());
strict(); // => false

// Вызов метода
const human = {
    name: "Dmitry",
    surname: "Anufriev",
    age: 20,
    birthday: "22.10.2002",
    weight: 75,
    height: 1.77,
    getBodyMassIndex() {
        const BMI = this.weight/(Math.pow(this.height, 2));
        if(this.age >= 18 && this.age <=24) {
            if(BMI < 20) {
                return "Недостаточный вес";
            }
            else if(BMI >= 20 && BMI < 25) {
                return "Нормальный вес";
            }
            else if(BMI >= 25 && BMI < 30) {
                return "Избыточный вес";
            }
            else if(BMI >= 30) {
                return "Ожирение";
            }
            else {
                return new Error("Неверно указан вес или рост");
            }
        }
        else if(this.age >= 25 && this.age <=34){
            if(BMI < 21) {
                return "Недостаточный вес";
            }
            else if(BMI >= 21 && BMI < 26) {
                return "Нормальный вес";
            }
            else if(BMI >= 26 && BMI < 31) {
                return "Избыточный вес";
            }
            else if(BMI >= 31) {
                return "Ожирение";
            }
            else {
                return new Error("Неверно указан вес или рост");
            }
        }
        else if(this.age >= 35 && this.age <=44) {
            if(BMI < 22) {
                return "Недостаточный вес";
            }
            else if(BMI >= 22 && BMI < 27) {
                return "Нормальный вес";
            }
            else if(BMI >= 27 && BMI < 32) {
                return "Избыточный вес";
            }
            else if(BMI >= 32) {
                return "Ожирение";
            }
            else {
                return new Error("Неверно указан вес или рост");
            }
        }
        else if(this.age >= 45 && this.age <=54) {
            if(BMI < 23) {
                return "Недостаточный вес";
            }
            else if(BMI >= 23 && BMI < 28) {
                return "Нормальный вес";
            }
            else if(BMI >= 28 && BMI < 33) {
                return "Избыточный вес";
            }
            else if(BMI >= 33) {
                return "Ожирение";
            }
            else {
                return new Error("Неверно указан вес или рост");
            }
        }
        else if(this.age >= 55 && this.age <=64) {
            if(BMI < 24) {
                return "Недостаточный вес";
            }
            else if(BMI >= 24 && BMI < 29) {
                return "Нормальный вес";
            }
            else if(BMI >= 29 && BMI < 34) {
                return "Избыточный вес";
            }
            else if(BMI >= 34) {
                return "Ожирение";
            }
            else {
                return new Error("Неверно указан вес или рост");
            }
        }
        else if(this.age >= 65) {
            if(BMI < 25) {
                return "Недостаточный вес";
            }
            else if(BMI >= 25 && BMI < 30) {
                return "Нормальный вес";
            }
            else if(BMI >= 30 && BMI < 35) {
                return "Избыточный вес";
            }
            else if(BMI >= 35) {
                return "Ожирение";
            }
            else {
                return new Error("Неверно указан вес или рост");
            }
        }
        else {
            return new Error("Неверно указан возраст");
        }
    }
}