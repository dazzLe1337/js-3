let num = +prompt('Введите число');
let power = +prompt('Введите степень');

let answer = 1;
for(let i = 0; i < power; i++){
    answer = answer * num;
}
alert(answer);


let number = +prompt('Введите кол-во ступеней');
let symbol = prompt('Введите символ отступов');
let symbolEnd = prompt('Введите конечный символ');

for(let i = 0; i < number; i++) {
    symbolEnd = symbol + symbolEnd;
    console.log(symbolEnd);
}