function test() {
    let localVar = "I exist only here";
    console.log(localVar);
}
test();
console.log(localVar); // Error: localVar is not defined
