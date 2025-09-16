/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function =20;

let person = 'aditya'
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'teacher';

let job1 = 'teacher';
let job2 = 'Programmer';

console.log(job2);
console.log(myCurrentJob);

console.log(job1);


true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let month;
console.log(month);
console.log(typeof month);

year = 2006;
console.log(typeof year);
console.log(year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 2005;
console.log(birthYear);

lastName = 'Raj';
console.log(lastName);
*/


/*
const now = 2006;
const ageAditya = 2006-1994;
const ageRaj = 2005-1962;
console.log(ageAditya,ageRaj);

console.log(ageAditya*3, ageRaj*5,ageAditya/10,2**3);

const firstName = 'Aditya';
const lastName = 'Raj';
console.log(firstName +' '+lastName)


let x = 15+5;//15
x-=5;//x=x-5=15
x*=4;
x++;
++x + x++;
--x+ x--;
console.log(x);

//comparison operator

console.log(ageAditya>ageRaj);
console.log(ageAditya<ageRaj); // <,>,<=,>=
console.log(ageRaj<100);
console.log(ageAditya>=12);

const isFullAge = ageRaj >=10;
console.log(now-1998> now-1996);
console.log(now-1997<now-1997);



let x,y;
x=y=25-10-5; // x=y=10
console.log(x,y); */
/*
const averageAge = (ageAditya + ageRaj)/2;
console.log(averageAge,ageAditya,ageRaj);
*/


//CODING CHALLENGE
/*
const massMark= 78;
const heightMask=1.69;

const massJohn=92;
const heightJohn=1.95;
*/

/*
const massMark= 95;
const heightMask=1.88;

const massJohn=85;
const heightJohn=1.76;

const BMIMark = massMark/heightMask**2;
const BMIJohn = massJohn/(heightJohn*heightJohn);
const markHigherBMI = BMIJohn> BMIMark;
console.log(BMIMark,BMIJohn);

console.log(BMIMark,BMIJohn,markHigherBMI);
*/ /*
year=2006;
const firstName = 'Aditya';
const job = 'coder';
const birthYear = 2005;

const aditya = " I'm "  +  firstName + ' , a ' + (year - birthYear)+' years old '+job+'!';
console.log(aditya);    // TEMPELATE LITERAL

const adityaNew =` I'm ${firstName} , a ${year-birthYear} year old ${job} ! `;
console.log(adityaNew);


console.log(`Just a regular string...`);


console.log('String with \n\ multiple \n\ lines');

console.log(`String
    
multiple

lines`);
*/
/*/l13
let yearsLeft;
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
console.log('Aditya can start driving licence🚗');
} else{
    const yearsLeft = 18-age;
    console.log (`Aditya is too young, wait another ${yearsLeft} years:)`);
}
  
let century;
const birthYear = 2001;
if(birthYear<= 2000){
 century = 20;
} else{
    century=21;
}

console.log(century);
*/

//L14

/*
const massMark= 95;
const heightMask=1.88;

const massJohn=85;
const heightJohn=1.76;

const BMIMark = massMark/heightMask**2;
const BMIJohn = massJohn/(heightJohn*heightJohn);
const markHigherBMI = BMIJohn> BMIMark;
console.log(BMIMark,BMIJohn);

if(BMIMark> BMIJohn){

    console.log("Mark's BMI is higher than John's! ");
} else {
    console.log("John's BMI is higher than Mark's!");
}
*/  

/*
const massMark= 78;
const heightMask=1.69;

const massJohn=92;
const heightJohn=1.95;


const BMIMark = massMark/heightMask**2;
const BMIJohn = massJohn/(heightJohn*heightJohn);
const markHigherBMI = BMIJohn> BMIMark;
console.log(BMIMark,BMIJohn);

if(BMIMark> BMIJohn){

    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})! `);
} else {
    console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})!`);
}

*/

// type conversion
/*
const inputYear = 2006;
console.log (Number(inputYear),inputYear);
console.log(Number(inputYear)+18);


console.log(Number('Aditya'));
console.log(typeof NaN);

console.log(String(23), 23);


//type coercion

console.log(' I am ' + 20 + ' years old');
console.log('23'-'10' - 3);
console.log('23'*'3');

*/


// 5 falsy values : 0, '', undefined,null,NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Aditya'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;
if(money)
{
    console.log("Don't spend it all");
}
else{
    console.log('You should get a job');
}


let height = 0;
if(height){
    console.log('YAY! Height is defined');

}
else{
    console.log('Height is UNDEFINED');

}

*/
/*
 const age = '18';
 if(age===18)
    console.log('You just beacme an adult to vote : D (strict)');

 if (age==18)
console.log('You just became an adult to vote :D(loose)');
 



 const favourite = prompt ("What's your favourite number?");
 console.log(favourite);
console.log(typeof favourite);


if(favourite === 4){
    console.log("cool! , 04 is an amazing number");
}else if (favourite === 3){
    console.log("cool! , 03 is an amazing number")
 }else if (favourite === 2){
    console.log("cool! , 02 is an amazing number")
}else{
    console.log(' Number is not 04,03,02');
}
 
if (favourite !== 4)
    console.log('Why not 04?');

*/
/*
const hasDriversLicence = true; // A
const hasGoodVision = true;  //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision){
    console.log('Aditya is a good driver');
} else {
    console.log('Someone else should drive...');
}


const isTired = false; //C

console.log(hasDriversLicence && hasGoodVision && isTired);
if(hasDriversLicence && hasGoodVision && !isTired){
    console.log('Aditya is able to drive!');
} else{
    console.log('Someone else should drive.....');
}
*/

/*const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins>scoreKoalas){
    console.log(' dolphins win the trophy🏆');
}
else if(scoreDolphins<scoreKoalas){
    console.log(' koalas win the trophy🏆');
}
else if(scoreDolphins===scoreKoalas){
    console.log(' both win the trophy');
}
*/



// const scoreDolphins = (97+112+81)/3;
// const scoreKoalas = (109+95+86)/3;
// console.log(scoreDolphins, scoreKoalas);


// if(scoreDolphins>scoreKoalas&& scoreDolphins >= 100){
//     console.log(' dolphins win the trophy!🏆');
// }
// else if(scoreDolphins>scoreKoalas && scoreKoalas>=100){
//     console.log(' koalas win the trophy!🏆');
// }
// else if(scoreDolphins===scoreKoalas){
//     console.log(' both win the trophy!🏆');
// }
// else {
//     console.log( 'no one win the trophy!🏆');
// }


// const day = 'monday';

// switch (day) {
//     case'monday' : // day==='monday'
// console.log('plan course strucure');
// console.log('go to coding meetup');    
// break;
//  case 'tuesday':
//     console.log('write code examples');
//     break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('prepare theory videos');
//         break;
//         case 'friday ':
//             console.log('record videos');
//             break;
//             case 'saturday':
//                 case 'sunday':
//                 console.log('enjoy the weekend');
//                 break;
//                 default:
//                     console.log('not a valid day!');
    
// }

// if (day === 'monday') {

// }else if (day === 'tuesday') {

// }else if (day === 'wednesday' || day === 'thursday') {

// }else if (day === 'friday') {

// }else if (day === 'saturday' || day === 'sunday' ) {
//    console.log('enjoy the weekend') ;
// }else {
//     console.log ('not a valid day !');
// }




// 3+4
// 1991
// true && false && !false

// if (13>10) {
//     const str = '13 is bigger';
// }



// const me = 'Aditya';
// console.log(`I'm ${2025-2006} years old ${me}`);




// 

const bill = 275;
const tip = bill <=300 && bill >= 50 ? bill*0.15 : bill *0.2;
console.log(`The bill was ${bill},the tip was ${tip},
    and the total value ${bill+tip}`); 

const bill1 = 40;
const tip1 = bill1 <=300 && bill1 >= 50 ? bill1 *0.15 : bill1 *0.2;
console.log(`The bill was ${bill1},the tip was ${tip1},
    and the total value ${bill1+tip1}`);

const bill2 = 430;
const tip2 = bill2 <=300 && bill2 >= 50 ? bill2*0.15 : bill2 *0.2;
console.log(`The bill was ${bill2},the tip was ${tip2},
    and the total value ${bill2+tip2}`);










