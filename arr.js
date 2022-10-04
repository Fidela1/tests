//// everse a number
function change(n){
    n=n+""; // convert a number to a string
return n.split("").reverse().join("");
}
console.log('number',change(22343));

// check palindrome

function checkPalindrome(str){
    
const arrSplit = string.split('');
const arrReverse = arrSplit.reverse();
const arrJoin = arrReverse.join('');

if(string == arrJoin){
    console.log('string is palindrome');
}
else{
    console.log('string is not palindrome');
}
}
const string = prompt('Enter string' );
const value = checkPalindrome(string);
console.log(value);

/// to change first letter into capital


function toCapital(sr){
var b = sr.split(' ');
var newArray = [];

for (let i=0;i<b.length;i++){
    newArray.push( b[i].charAt(0).toUpperCase() + b[i].slice(1));
}
return newArray.join(' ');
}
console.log(toCapital('the quick brown fox'));
