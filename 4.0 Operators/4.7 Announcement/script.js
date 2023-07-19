// Объявления
// const, let и var
const TAU = 2*Math.PI;
let radius = 3;
var circumference = TAU * radius;

// function
function area(radius) {
    return Math.PI * radius * radius;
}

// class
class Circle {
    constructor(radius) {
        this.r = radius;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
    circumference() {
        return 2* Math.PI * this.r;
    }
}

// import и export
import Circle2 from './4.0 Operators/4.4 Cycles/script.js';
const PI = Math.PI;
export {PI, TAU};
export const TAU_ANALOG = 2 * Math.PI;
export function magnitude(x,y) {
    return Math.sqrt(x*x + y*y);
}
export default class Circle3 {
    /* Определение класса опущено */
}