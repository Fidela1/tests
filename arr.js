//// reverse a number
function change(x){
    x=x+""; // convert a number to a string
return x.split("").reverse().join("");
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


/// to change first letter of string to upper

const word = 'john smith';

const arra = word.split(' ');

for (let i = 0;i < arra.length;i++){
    arra[i]=arra[i].charAt(0).toUpperCase() + arra[i].slice(1);
   
}
const str1 = arra.join();

console.log(str1);

// alphabetical order

function alphabetical(str){
    return str.split('').sort().join('');
}

console.log(alphabetical("website"));


//////

function largestWord(str1){
     str1 = str1.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    

    for(let i = 0; i<str1.length;i++){
        if (str1[i].length>largest.length){
            largest = str1[i];
        }
    }
    return largest;
}

console.log(largestWord('Web Development Tutorial'));

//// find longest word

function longer(str2){
str2 = str2.split(" ");
return str2.sort((a,b) => b.length-a.length)[0];

}
console.log(longer('programming Language'));