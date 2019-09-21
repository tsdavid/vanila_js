/* String
const what = "Nicolas";
*/

/*Boolean
const what = false;
*/

/*Number
const what = 666;
*/

/*Float
const what = 55.1;
*/

//onsole.log(what);

/* way to organize data in js 
1. Array
2. Object
*/

// Array
const something = "something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", something];
console.log(daysOfWeek);

//Object : put the value
const personInfo = {
  name: "DAVID",
  age: 26,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "ORT"],
  favFood: [{
    name:"Kimchi",
    fatty:false,
  },
  {name: 'Cheese burger',
  fatty:true},
  ]
};
console.log(personInfo);

console.log(personInfo.gender);

personInfo.gender = "Female";

console.log(personInfo.gender);

console.log(personInfo.favFood[0].name)

console.log(console)


// Make a function
function sayHello(friend, age){
  //console.log(`Hello, ${friend} you are ${age} years old`);
  return `Hello, ${friend} you are ${age} years old`;
}
//sayHello("jun", 26);
const greetFriends = sayHello("June", 26)
console.log(greetFriends)


// object 안에 function을 만들수 있다.
const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  divid: function(a, b){
    return a / b;
  },
  multiply: function(a, b){
    return a * b;
  },
  power: function(a, b){
    return a ** b;
  }

}

console.log(
  calculator.plus(5,5),
  calculator.minus(5, 5),
  calculator.divid(5 ,5),
  calculator.multiply(5, 5),
  calculator.power(5, 5)
  )

