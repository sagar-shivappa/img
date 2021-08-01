
let listyu=[1,2,1,3,2,3,4,4,5,6,7,8];
let stringArray =['sagar','guvi','sample', 'dowell','Bhoomi','sagar','Bhoomi' ];


// Assigmnet 1;
let oddNumber=listyu.filter( number =>number%2!=0);
console.log(oddNumber);

// Assignment 2:

let capsCoversion=stringArray.map(caps=>caps.toUpperCase());
console.log(capsCoversion);

// Assignment 3:
let listy1u=[0,1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(listy1u.reduce(reducer));

// Assignment 4:
const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
let primeNumbers=listyu.filter(num=>isPrime(num));
console.log(primeNumbers);

// Assignment 5:

let uniqueChars = listyu.filter((c, index) => {
    if(listyu.indexOf(c) !== index) console.log(c +' Duplicate')
    return listyu.indexOf(c) === index;
});
console.log('uni',uniqueChars);
// let dou=uniqueChars.map(num=>num*2);
// console.log(dou)

// Assignment 6:
// Length of String:
console.log(stringArray.map(len=>len.length));

// Duplicate names

let dupName=stringArray.filter((name,index)=>{
    if(stringArray.indexOf(name)!==index){
        console.log('Duplicate Found !!! ' + name)
    }else{
        return stringArray.indexOf(name)===index
    }
});
console.log('uniName',dupName);

// Assignment 7:
let data=[
    {name:'sagar',gender:'Male'},
    {name:'AbhiGandaa',gender:'Male'},
    {name:'Geetha Priya',gender:'FeMale'},
    {name:'Ganesha',gender:'FeMale'},
    {name:'Monikaa',gender:'FeMale'}
    // find femaile,
    // count of male, name starting with G
]
let males=data.filter(i=>i.gender=='Male');
let females=data.filter(i=>i.gender=='FeMale');
let firstWord=data.filter(i=>i.name[0]=='G');
console.log('All Females',females.map(name=>name.name));
console.log('Count of Male',males.length);
console.log('Name starting with G',firstWord.map(name=>name.name));
