// Объявление с помощью let и const
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x;
const H0 = 74; // Постоянная Хаббла
const C = 299792.458; // Скорость света в ваккуме
const AU = 1.496E8; // Астрономическая единица: расстояние до солнца

// Объявление переменных с помощью var
var str = "hello, world!";

// Деструктурирующее присваивание
let [num1,num2] = [1,2]; // То же, что и let num1=1, num2=2
[num1,num2] = [num1+1, num2+2]; // То же, что и let num1 = num1 + 1, num2 = num2 + 1
[num1,num2] = [num2,num1]; // Поменять местами значения двух переменных
[num1,num2]; // => [3,2]
    // Преобразует координаты [x,y] в полярные координаты [r,theta]
    function toPolar(x,y) {
        return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
    }
    // Преобразует полярные координаты в декартовы
    function toCartesian(r,theta) {
        return [r*Math.cos(theta), r*Math.sin(theta)];
    }
    let [r,theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
    [x,y] = toCartesian(r,theta); // [x,y] == [1.0, 1.0]
let obj = {
    x:1,
    y:2
}
for(const [name,value] of Object.entries(obj)){
    console.log(name, + ": ", value); // Выводится "x: 1" и "x: 2"
}
[x,y] = [1]; // x == 1; y == undefined
[x,y] = [1,2,3]; // x == 1; y == 2
[,x,,y] = [1,2,3,4]; // x == 2; y == 4
[x, ...y] = [1,2,3,4]; // x == 1; y == [2,3,4]
let [first, ...rest] = "hello"; // first == "h"; rest == ["e", "l", "l", "o"]
const {sin,cos,tan} = Math; // sin = Math.sin, cos = Math.cos, tan = Math.tan