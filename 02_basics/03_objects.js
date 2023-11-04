//singleton
//Object.create


// object literals
const muSym = Symbol("key1")


const JsUser = {
    name: "Prajwal",
    mySym: "mykey1" ,
    age: 21,
    location: "Mumbai",
    email: "prajwal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["name"]);
console.log(typeof(JsUser.mySym));






