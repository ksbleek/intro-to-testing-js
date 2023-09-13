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