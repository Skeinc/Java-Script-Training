// Смешанные операторы
// with
with(document.forms[0]) {
    // Далее появляется возможность прямого доступа к элементам формы, например:
    name.value = "";
    address.value = "";
    email.value = "";
}

// debugger
function f(o) {
    if(o === undefined) debugger; // Временная строка для отладочных целей, далее идет остальной код функции
    console.log("Отладчик работает!");
}

// use strict
"use strict"