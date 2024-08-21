const prompt = require('prompt-sync')();
let a = parseInt(prompt("Enter the  first number"));
let b = parseInt(prompt("Enter the  second number"));
let c = parseInt(prompt("Enter the  third number"));
if ((a>b && a<c) || (a<b && a>c)) {
    console.log(`a is second largest"${a} `);
}
else if((b>a && b<c)  || (b>c && b>a))
    {
    console.log(`a is second largest"${b} `);
    
}
else {
    console.log(`a is second largest"${c} `);

}
