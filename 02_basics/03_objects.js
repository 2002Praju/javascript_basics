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

JsUser.email = "prajwal@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "prajwal@microsoft.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());