// Primitive(call by value)

// 7 Types : String, Number, Boolean , null , undefined, symbol, BigInt

//NonPrimitive (call by reference)

//Array , Objects , Functions
const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id==anotherId);
const bigNumber = 851526n;
console.log(typeof(bigNumber));

//NonPrimitive
const heroes = ["Shaktiman","Krish","Ultraman"]
let myObj ={
    name: "Prajwal",
    age :22,
}

const myFunction = function(){
    console.log("Hello , Prajwal");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3
