'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log ('I can drive : D');

// // const interface = 'Audio;
// // const private = 534;




// function logger () {
//     console.log('My name is Aditya');

// }

// //calling/running/invoking function
// logger();
// logger();
// logger();

// function fruitProcessor (apples,oranges){
//     const juice = `Juice with ${apples} apples and
//      ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);



// // function declaration
// function calcAge1(birthYear){
//     return 2037-birthYear;

// }
// const age1 = calcAge1(2006);

// // function expression
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2006);

// console.log(age1,age2);


// // Arrow function
// const calcAge3 = birthYear=> 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear , firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65-age;
//     //return retirement;
//     return ` ${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Aarav'));
// console.log (yearsUntilRetirement(1980,'Harsh'));


// const cutPieces = function(fruit) {
//     return fruit *4;
// }

// const fruitProcessor = function(apples,oranges) {

//     const applePieces =  cutPieces(apples);
// const orangePieces = cutPieces(oranges);

// const juice = `Juice with pieces of ${applePieces} apple and ${orangePieces} pieces of orange.`;
// return juice ;
// };

// console.log(fruitProcessor(2,3));


// const calcAge = function(birthYear){
//     return 2037 - birthYear;

// }

// const yearsUntilRetirement = function(birthYear,firstName) {
//     const age = calcAge(birthYear);
//     const retirement=65 - age;

//     if (retirement>0) {
//         console.log(`${firstName} retires in
//             ${retirement} years`);
//             return retirement;
//     } else{
        
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2006, 'SHYAM'));
// console.log(yearsUntilRetirement(1950,'HARRY'));


// const calcAverage = (a,b,c) => (a+b+c)/3;
// console.log (calcAverage(3,4,5));

// //test 1 ;

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function( avgDolphins , avgKoalas)
// {
//     if (avgDolphins>= 2* avgKoalas) {
//         console.log(`Dolphins win 🏆${avgDolphins} vs. ${avgKoalas})`);

//     } else if (avgKoalas >= 2* avgDolphins) {
//         console.log (` Koalas win 🏆 ${avgKoalas} vs. ${avgDolphins})`);

//     } else {
//         console.log ('No team wins...');
//     }

// }

// checkWinner(scoreDolphins,scoreKoalas);

// checkWinner(576,111);

// // test 2
// const scoreDolphins1 = calcAverage(85,54,41);
// const scoreKoalas1 = calcAverage(23,34,27);
// console.log(scoreDolphins1, scoreKoalas1);
// checkWinner(scoreDolphins1,scoreKoalas1);


// const friend1 = 'Aditya';
// const friend2 = 'Aarav';
// const friend3 = 'Shree';

// const friends = [ 'Aditya' , 'Aarav' , 'Shree'];
// console.log(friends);

// const years = new Array (2001,2002,2003);

// console.log(friends[0]);
// console.log ( friends[2]);

// console.log (friends.length);
// console.log(friends[friends.length - 1]);

// friends [2] = 'Jay';
// console.log(friends);
// //friends = ['Yug', 'Akash']

// console.log(friends.length);
// console.log(friends [friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// //friends = ['Yug','Akash']

// const firstName = 'Aditya';
// const aditya = [firstName,'Raj',2037-2006,'student',friends];
// console.log(aditya);
// console.log(aditya.length);


// exercise
//  const calcAge = function (birthYear){
//     return 2037 - birthYear;
//  }
//  const years = [1990,1967,1956,2006,2019];

//  const age1 = calcAge(years[0]);
//  const age2 = calcAge(years[1]);
//  const age3 = calcAge(years[years.length - 1]);
//  console.log(age1,age2,age3);

//  const ages = [calcAge(years[0]), calcAge(years[1]),
// calcAge(years[years.length - 1] )];
// console.log(ages);



// const friends = ['Krish', 'Shubham','Pranav'];

// // add elements

// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// // remove elements

// friends.pop();  //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();  //first
// console.log(friends);

// console.log(friends.indexOf('Shubham'));
// console.log(friends.indexOf('Harsh'));


// friends.push(23);
// console.log(friends.includes('Shubham'));
// console.log(friends.includes('Harsh'));
// console.log(friends.includes(23));

// if(friends.includes('Shubham')){
//     console.log('You have a friend called Shubham');
// }
// else 
// console.log ('You dont have a friend by this name');


// //coding challenge

// const calcTip = function(bill){
//     return bill>=50 && bill<= 300 ? bill *0.15: bill*0.2;
// }

// // const calcTip = bill => bill>=50 && bill<= 300 ? bill *0.15: bill*0.2;
//  const bills = [125,555,44];
//  const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1]+ tips[1],bills[2]+tips[2]];

// console.log(bills,tips,totals);


/*const adityaArray = [
    'Aditya',
    'Raj',
    2025-2006,
    'student',
    ['Mitesh', 'Piyush','Shubh']
] ;

const aditya = {
    firstName : 'Aditya',
    lastName : 'Raj',
    age :2025-2006,
    job : 'student',
    friends: ['Alok', 'Piyush','Shubh']
};
console.log(aditya);

console.log(aditya.lastName);
console.log(aditya['lastName']);

const nameKey = 'Name';
console.log(aditya['first'+ nameKey]);
console.log(aditya['last'+ nameKey]);

//console.log(aditya.'last'+ nameKey);


// const interestedIn = prompt ('What do you want to know about aditya ? Choose between firstName, lastName , age,job , and friends');

// if (aditya[interestedIn]) {
//     console.log (aditya[interestedIn]);
// }else {
//     console.log('Wrong request ! Choose betwen firstName , lastName , age , job , and friends');

// }

aditya.location = 'Hazaribagh';
aditya['instagram'] = '@adityyasinha';
console.log(aditya);
  

// challenge
//" Aditya has 3 friends, and his best friend is called Alok"

console.log (`${aditya.firstName} has ${aditya.friends.length} friends , and his best friend is called ${ aditya.friends[0]}`);
*/


// const aditya = {
//     firstName : 'Aditya',
//     lastName : 'Raj',
//     birthYear : 2006,
//     job : 'student',
//     friends: ['Alok', 'Piyush','Shubh'],
//     hasDriversLicence : true ,

    //   calcAge : function (birthYear){
    //    return 2025 - birthYear;
    //  }

    // calcAge : function (){
    //     console.log (this);
    //     return 2025-this.birthYear;
    // }

   // calcAge: function (){
     //   this.age = 2025 - this.birthYear;
       // return this.age;
    //}
    

    // console.log(aditya.calcAge());

    //    console.log(aditya.calcAge());
    //       console.log(aditya.calcAge());
    //          console.log(aditya.calcAge());


      //getSummary: function (){
       //  return`${this.firstName} is a ${this.calcAge()} - years old ${aditya.job} , and he has ${this.hasDriversLicence? 'a':'no'} driver's licence.`}

    //};

    // console.log(aditya.calcAge);

    // console.log (aditya.calcAge());
    // console.log (aditya.birthYear);


    // coding challenge
    // const mark = {
    //     fullName : 'Mark Miller',
    //     mass : 78 ,
    //     height : 1.69,
    //     calcBMI : function (){
    //         this.bmi = this.mass / this.height ** 2;
    //         return this.bmi;
    //     }
    // };

    // const john = {
    //     fullName : 'John Smith' ,
    // mass : 92,
    // height :1.95,
    // calcBMI : function (){
    //     this.bmi = this.mass / this.height ** 2;
    //     return this.bmi;
    // }
    // };

    // mark.calcBMI();
    // john.calcBMI();

    // console.log (mark.bmi , john.bmi);

    // // " John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

    // if (mark.bmi > john.bmi){
    //     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)

    // }else if(mark.bmi < john.bmi) {
    //     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
    // }



    // ITERATION => THE FOR LOOP
//    console.log('Lifting weights repetitions 1');
//     console.log('Lifting weights repetitions 2');
//     console.log('Lifting weights repetitions 3');
//     console.log('Lifting weights repetitions 4');
//     console.log('Lifting weights repetitions 5');
//     console.log('Lifting weights repetitions 6');
//     console.log('Lifting weights repetitions 7');
//     console.log('Lifting weights repetitions 8');
//     console.log('Lifting weights repetitions 9');
//     console.log('Lifting weights repetitions 10');



//     // for loop keeps running while condition is true
//     for(let rep = 1; rep<= 30; rep++){
//         console.log (`Lifting weights repetition ${rep}`);
//     }



// // LOOPING, ARRAY, BREAKING CONDITION
// const arpit = [
//     'Arpit',
//     'Sinha',
//     '2025-2006',
//     'Student',
//     ['Aditya','Harsh','Aarav']
// ];
// const types = [];

// console.log(arpit[0]);
// console.log(arpit[1]);
// //....
// console.log(arpit[4]);


// for (let i =0; i< arpit.length; i++) {

//     //reading  from arpit array
//     console.log( arpit[i] );
//         console.log(typeof arpit[i]);

//     //filling types array
//     // types[i] = typeOf arpit [i];
//     types.push(typeof arpit[i]);
// }

// console.log(types);

// const years = [1991,2007,196,2009];
// const ages = [];

// for (let i = 0; i< years.length;i++){
//     ages.push(2025-years[i]);
// }

// console.log(ages);



//LOOPING BACKWARDS
const aditya = [
    'Aditya',
    'Sinha',
    2025-2006,
    'Student',
    ['Aditya','Akshat',' Aarav']
];

//0,1,....,4
//4,3,....,0


// for (let i = aditya.length-1; i>=0; i--) {
//     console.log(i,aditya[i],typeof aditya[i]);
// }

// for (let exercise = 1; exercise <4;exercise++){
//     console.log(`-------- Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
//     }
//     };


//    // WHILE LOOP
//     for( let rep = 1; rep<=10;rep++){
//         console.log(`Lifting weights repetition ${rep}`);
//     }

//     let rep = 1;
//     while (rep<=10){
//        // console.log(`WHILE : Lifting weights repetition ${rep}`);
//         rep++;
//     }

//     let dice = Math.trunc(Math.random()*6)+1;

//     while (dice !==6) {
//         console.log(`You rolled a ${dice}`);
//         dice = Math.trunc(Math.random()*6)+1;
//         if (dice===6) console.log('Loop is about to end...');
//     }


// CODING CHALLENGE #4
/*
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill* 0.15 : bill * 0.2;

}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for(let i = 0; i<bills.length;i++) {
    const tip = calcTip(bills[i]);
tips.push(tip);
totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0;i < arr.length;i++){
         sum+= arr[i];
    }
    return sum/ arr.length;
}

console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/


/////-----COMPLETED-----/////