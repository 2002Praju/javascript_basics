//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"anyone@gmail.com",
    fullname:{
        userfullname :{
            firstname: "prajwal" ,
            lastname: "vyavahare"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//to connect two or more objects
const obj1 = { 1:"a", 2: "b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
const obj4 = { obj1,obj2}
const obj5 = Object.assign({}, obj1, obj2,obj3)
const obj6 = {...obj1,...obj2, ...obj3}
console.log(obj4);
console.log(obj5);
console.log(obj6);

const users = [

]
//users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// objects de-structure and JSON API

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "prajwal"
}

//course.courseInstructor

const {courseInstructor : instructor} = course

console.log(courseInstructor)
console.log(instructor);

// const navbar =      ({company}) => {
    
// }

// {
//     "name": "prajwal",
//     "coursename": "js in hindi",
//     "price": "free"

// }
