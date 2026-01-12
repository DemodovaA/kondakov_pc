// let book1 = 'The Secret'
// let book2 = 'Думай медленно, решай быстро'
// let book3 = 'name'

// const myFavBooks = [
//     'The Secret', 'Думай медленно, решай быстро','name'
// ];

// const myFavBooks2 = new Array (
//     'The Secret', 'Думай медленно, решай быстро','name'
// );

// console.log(book1);
// console.log(myFavBooks);

const phrases = [
    'погоняю лошадок',
    'отправлю другу смешную картинку',
    'подерусь с собакой попрошайки',
    'разберусь о чем поют реперы',
    'узнаю зарплаты во Сан-Франциско'
];

// console.log(phrases.length);
// console.log(phrases[0]);

// console.log(phrases.at(-1));

// let rand = Math.random() * 10;
// console.log(rand);


// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   };

// console.log(randomInteger(2, 7));

const getRandomElement = (arr) => {
 const randomIndex = Math.floor(Math.random() * arr.length);
console.log(phrases(randomIndex));
return arr (randomIndex)
}

let RandomElement = getRandomElement(phrases) 

// let x = prompt('Введите число: ')
// let n = prompt('Введите степень')
// const pow = (x, n) => {
//   let a = x ** n
//   if (x=== null || n=== null)
//     return 'введите что-то'
//   if (x<= 0)
//     return 'Первое число не должно быть нулем или отриц'
//   if (isNaN(x) || isNaN(n))
//     return 'введите допустимый символ'
//   return a
// }

// console.log(pow(x,n))

const button = document.querySelector('.button');
console.log(button);
const image = document.querySelector('.image');
console.log(button);
const advice = document.querySelector('.advice');
console.log(button);
const advice__paragraph = document.querySelector('.advice__paragraph');
console.log(button);

document.addEventListener('click', () => {
  console.log('click, 42')
})