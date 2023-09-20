// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x){
    if(x === undefined || typeof x !== 'string'){
        return "Hello, World!";
    }
    return `Hello, ${x}!`
}

function isFive(input) {
    return input === 5
}

function isEven(input){
    let num = parseFloat(input)
    if(isNaN(num)){
        return false
    } else {
        return input % 2 === 0;
    }
}

function isVowel(input) {
    return input === 'a' || input === 'A' || input === 'e' || input === 'E' || input === 'i' || input === 'I' || input === 'o' || input === 'O' || input === 'u' || input === 'U';
}

function add(num1, num2) {
    const sum = parseFloat(num1) + parseFloat(num2);
    if (isNaN(sum)) {
        return NaN;
    }
    return sum;
}