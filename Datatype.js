// datatypes - primitive

// string

var name1 ="anoop"
var name2='arun'

console.log(name1, name2)
console.log(`employees - ${name1} & ${name2}`)

// number

var n1=3;  //integer
var n2=3.56   //float

console.log(n1, n2)

// boolean
 var a=true; //(1)
 var b=false; //(0)
 
 console.log(a,b)

//  undefined
let firstname;
console.log(firstname)

// null
let number=null;
console.log(number);


// non primitive datatypes

// object
var student={
    name:"anoop",
    age:"22",
    qualification:"mca"
}
 console.log(student)
 console.log(student.qualification)
 console.log(student.age)


// Array

var arr=[12,'anoop',true , null]
console.log(arr)
console.log(arr[1])


// function
function sum(a,b){ //function definition
    c=a+b
    return c
}
console.log(sum(11,3)) //function call


// typeof method
var a=12
let b2="anoop"
const d4=true;

console.log(typeof(a), typeof(b2), typeof(d4))


// type conversion
// implicit - automatically by js


var n1=5
var n2="10"

console.log(n1+n2)
console.log(typeof(n2))

// explicit conversion

var n3= Number(n2)
console.log(n3)
console.log(typeof(n3))


// /////// string concatenation

var a="Anoop"
var b="how are you"

console.log(" hello my name is " +a + " and "+b)
console.log(" hello my name is " ,a , " and ",b)
console.log(`hello iam  ${a}`)
