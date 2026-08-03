const callback = (n)=>{
    return n**2;
}

function cube(callback,n){
    return callback(n)*n;

}
console.log(cube(callback,3))


//  the callback function takes a number n and returns its square
// the cube function takes the callbak function and a number n , applies the callback to n and then multipies by n
//the  console.log(cube(callback,3)) statement will output 27 because callback(3) returns 9



function hello(){
    console.log(" hello......")
}

setInterval(hello, 2000) //prints hellow i an interval of 2 seconds


function hoiii(){
    console.log(" hoiiiii......")
}

setTimeout(hoiii, 2000) // prints hoii 

