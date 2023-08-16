// Многомерные массивы
let table = new Array(10); // Создать одномерный массив размеров в 10
for(let i = 0; i < table.length; i++) {
    table[i] = new Array(10); // Создать из одномерного массива многомерный
}

for(let row = 0; row < table.length; row++) { // Инициализиовать массив
    for(let col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
    }
}

table[5][7]; // => 35

// Функция для создания матрицы
function createMatrix(row, col) {
    // Ограничения
    if(row > 100 || col > 100) return false;
    if(row < 1 || col < 1) return false;
    // Создание матрицы
    let matrix = new Array(row);
    for(let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(col);
    }
    // Заполнение матрицы
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            matrix[i][j] = Math.floor(Math.random() * 100);
        }
    }
    // Возвращение матрицы
    return matrix;
}

createMatrix(5,5);