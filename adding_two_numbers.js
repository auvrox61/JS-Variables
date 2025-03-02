const readline=require('readline-sync');
let n1=readline.question("Enter the first number: ");
let n2=readline.question("Enter the second number: ");
n1=parseFloat(n1);
n2=parseFloat(n2);
sum=n1+n2;
console.log(`Sum : ${sum}`);