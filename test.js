// sum 

const numbers = [1,43,23,42,5,10];
let sum=0;
 
for (let i=0;i<numbers.length; i++){
    sum += numbers[i];
}
console.log('sum of numbers = '+sum);

// using forEach method

const integer = [20,30,40];
 let add= 0;
integer.forEach(item => {
     add += item;
});
console.log('sum of numbers = ' +add);



// to find if number is even

const number = [2,3,4,6,8,7];

const even = number.filter(item => {
   return item % 2 ===0;
});
 console.log('the even numbers are '+even);


/// find gretest number

const arr = [20,15,30,4];

let greatest = 0;
for (i=0; i<arr.length; i++){
    if (arr[i] > greatest){
        greatest = arr[i];
    }
}
console.log('the greatest number = ' +greatest);

//to count letters

const letters = ['a','b','c','a','b','d','a'];

let count=[];

letters.forEach(item => {
    if(count[item]){
        count[item]++;
    }
    else {
        count[item] = 1;
    }
    
});
console.log(count);

// //  to convert vowel into upperCase


var sentence=prompt("Enter the sentence");

function convert(x){
 var a = x.split('');
 for( var i=0 ; i<a.length ; i++){
    if(a[i]=="a"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="e"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="i"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="o"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="u"){
        a[i] = a[i].toUpperCase();
    }
    else{
        a[i] = a[i].toLowerCase();
    }
  }
  var b = a.join('');
  return b;
 }

var output = convert(sentence);
console.log("Result is ", output);


// fibonacci series


function fibonacci (n){   // declaration of function
    
    let fib = [0,1]; //declaration of fibonacci element
    for (let i=2;i<n; i++){   //looop t
        fib[i] = fib[i-1] + fib[i-2];  // formula of fibonacci series

    }
    return fib;
}
// output
console.log('fibonacci of first number =',fibonacci(3));
console.log('fibonacci of second number =',fibonacci(4)); 


// count 

//let letter = 'Fidela Tuyizere';

function letter(element){
let name ={};
let value = element.split('');
console.log(value);
 
for ( const item of value) {

    if(name[item]){
        name[item]++;

    }
     else{
        name[item] = 1;
    }
    
}
return name;
}
// console.log(letter('Fidela Tuyizere'));


// 2.to make first letter of string capital

// 3. create array that contain vowel of a given string

let nam = 'john smith';
let vowel =['a','u','e','i','o'];
let array =[];
nam = nam.split('');
console.log(nam);
console.log(vowel);
for(let i = 0; i<nam.length;i++){
    for(let a=0;a<vowel.length;a++){
        
        if(nam[i]==vowel[a]){
              array.push(nam[i]); 
             
        }
      
    }
     
    
}
console.log(array);


// to check if number is odd

let x=345;
if(x%2!=0){
    console.log('number is odd');
    
}
else{
    console.log('number is even');
}

function odd(b){
    if(b%2!=0){
        console.log('number is odd');
        
    }
    else{
        console.log('number is even');
    }
}
odd(342);
// 4. to display largest string and smallest 


// to make first letter capital
const name22 = 'john smith';

const name12 = name22.split(' ');

for (let i = 0; i<name12.length;i++){
    name12[i] = name12[i].charAt(0).toUpperCase() + name12[i].slice(1);
}
const str2 = name12.join();

console.log(str2);

// find largest string

 const string = ['john','smith','alliane'];

 var a = 0;
 var largest;

 for(i=0; i<string.length; i++){
    if(string[i].length>a){
        largest = string[i];
    }
 }
 console.log(largest);

 // smallest

const peoples= ['smith','jane','alliance'];

var smallest = 0;
var  small;

for (let i=0;i>peoples.length;i++){
  if (peoples[i].length<smallest){
    small = peoples[i];
  }
}
console.log(small);


// find greatest string

const word = 'first day';
 
function findGreatest(string){
  string = string.split(' ');
  let longest = string.reduce((current,previous) =>{
    return current.length > previous.length ? current:previous
  },"");
  return longest;

}
let result = findGreatest(word);
console.log(result);

// find smallest string

const name2 = 'John Smith';

function findSmallest(str){
  str = str.split(' ');
  let smallest = str.reduce((previous,current) =>{
   return current.length < previous.length ? current:previous
  });
  return smallest;
  }
  let name1 = findSmallest(name2);
  console.log(name1);






