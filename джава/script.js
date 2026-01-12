// /**
//  * @param {number} a - первое число
//  * @param {number} b - второе число
//  * @returns {number} сумма двух чисел
//  */

// function sum(a, b){
//     return a+b;
// }

// sum(32,42)

// console.log('string')
// console.log(42.42)
// console.log(82743894728472437492749823747928432n)  //bigin

// /**
//  * 
//  * @param {name} name 
//  * @param {number} age 
//  * @returns 
//  */
// function hello(name, age) {
//     return `Привет, ${name}! Твой возраст: ${age}`;
//   }
  

//   console.log(hello("Алиса", 18));
//   console.log(hello("Алиса", 18));
//   console.log(hello("Алиса", 18));
//   console.log(hello("Алиса", 18));

// console.log(Number.isNaN('text'));
// console.log(Number.isFinite(1/0));

// let userName = 'john';
// console.log(userName);

// function example() {
//     if (true) {
//         let x = 42;
//         console.log(x)
//     }
//     console.log(x) //не сраб
// }

// let count = 40;
// count++;
// count++;
// count++;
// console.log(count);

// 'use strict'

// alert('lox')

// const greeting = 'hello';
// const iserName = promt('your name:', 'no name');
// console.log(`${greeting} ${userName}`)


// const budget = 600;
// const coffeePrice = 500;

// console.log(`Хватит ли мне денег на кофе: ${budgetvcoffeePrice}`);

// const year = Number(promt('Какой сегодня год?'))

// if (year === 2025) {
//     console.log('Пора учить JS')
// } else {
//     console.log('Поздно учиться, уже аппокалипсис')
// }



// const temperature = Number(promt('Установите комфортную температуру'));

// if (temperature >=100) {
//     console.log('FIRE!')
// } else if (temperature > 42 && temperature < 100) {
//     console.log('включите кондиционер');
// } else if (temperature > 20) {
//     console.log ('Терпимо открываю окно');
// }


// function calculateTime(distance, speed) {
//     let time = (distance / speed) * 60;
//     console.log(`Осталось ${time.toFixed(0)} минут`);
//   }

//   calculateTime(100, 50);

// function checkAge(age) {
//     if (age < 18) {
//         return false;
//     }
//     return true;
// }

// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }

//   alert( "Вам показывается кино 18+" );
// }

// const result = showMovie(19)



// const reverseString = (str) => {
//  let result = '';
 
//  for (let i = 0; i < str.lenght; 1++){
//     console.log(`${str[i]}${result}`)
//     result= `${str[i]}${result}`;
//  }
//  return result;
// };

// const result = reverseString('hello');


// for (let i = 0; i<10; i+=1){
//     if (i===7) break;
//  console.log(i);
// }

// const sumOfNumber = (start,end) => {

//     let i = start;
//     let sum = 0;

//     while (1 <= end){
//         sum += 1 //1
//         i += 1;
//     }

//     return sum;
// };

// console.log(sumOfNumber(1, 5));



// for (let i = 0; i < 10; i++) {
//     if (i === 6) break
  
//     console.log(i)
//   }



// const fib = (N) => {
//     if (N === 0) return 0;
//     if (N === 1) return 1;
    
//     let result 
//     let fibOne = 0;
//     let fibTwo = 1;
//     let i = 2;
    
//     while (i <= N){
//     result = fibOne + fibTwo
//     fibOne = fibTwo
//     fibTwo = result
//     i = i + 1
// }
//     return result;
// }

// console.log(fib(77));

//1111111
// const book = 599.99;
// const dost = 250;
// const result = (book + book + dost);
// console.log(typeof(result))
// console.log(result + "₽");

// console.log(499.99.toFixed(5))

///2222222
// const num1 = (42)
// const num2 = (53)
// const text = 

// if ((num1) % 2 === 0) {
//     console.log("Четное ли количество для числа 42: True")
// }
// else {
//     console.log("Четное ли количество для числа 42: False")
// }

// if ((num2) % 2 === 0) {
//     console.log("Четное ли количество для числа 53: True")
// }
// else {
//     console.log("Четное ли количество для числа 53: False")
// }

///33333333
// const num = Math.floor(Math.random() * 101)
// if (1 <= num && num<= 100) {
//     console.log("true")
// }
// else {
//     console.log("Ошибка вывода")
// }


///44444444
const value = BigInt(9999999999999999n);
const result = BigInt(value + 1n);
console.log(typeof(result));
console.log(result);

///55555555
// console.log("Are you ready?" + "\nYes!".toUpperCase())
// console.log(("Are you ready?" + "\nYes!".toUpperCase()).length)


