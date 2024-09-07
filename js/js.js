"use strict";

// 1

let one = Number(prompt('Введи деньги'));
let two = Number(prompt('Сколько стоит товар'));
let sdacha = one-two;
let neg = two-one;


if(one < 0 || two < 0){
    alert('Отрицательное число')
}
else if (one==two){
    alert('Покупка завершена');
} 
else if(one>two){
    alert(`Ваша сдача ${sdacha}`);
}
else if(one<two){
    alert(`Не хватает ${neg}`)
}


// 2 

let x = Number(prompt('Введи число'));

if (x>0){
    alert('1')
}
else if (x<0){
    alert('-1')
}
else if (x==0){
    alert('0');
}

//3

let a = Number(prompt('A'));
let b = Number(prompt('B'));

let result = (a + b < 4) ? 'Мало' : 'Много';

alert (result);


//4

let login = prompt('1 - Сотрудник; 2 - Директор'); 
let message = (login=='1') ? 'Привет' : (login=='2') ? 'Здравствуйте' : (login=='') ? 'Нет логина' : ''; 
alert(message);

//5 

let log = prompt('Введите логин');

if (log === 'Админ') {
    let j = prompt('Введите пароль');

    if (j === 'Я главный') {
        alert('Здравствуйте!');
    } else if (j === '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (log === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}