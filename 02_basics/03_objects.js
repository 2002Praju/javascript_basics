//singleton
//Object.create


// object literals
const mySym = Symbol("key1")


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

JSUSer.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JSUSer.email = "hitesh@microsoft.com"
console.log(JsUser)





