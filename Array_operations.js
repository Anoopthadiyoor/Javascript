var vehicle =["car","bus","bike","plane",200000,567000] ;//initilization

//1 To fetch an item from an array

console.log(vehicle[1])

//2 To find the length of the array
console.log(vehicle.length)

//3 Fetch every element of the array
console.log(vehicle)

//4 To insert a new element in an array

console.log(vehicle.push("auto"))
console.log(vehicle)

vehicle[vehicle.length]="12,000"
console.log(vehicle)
console.log(vehicle.length)

console.log("=------------------")

//5  To get index position of values stored in an array
for(let i in vehicle){     //for of is used to access the  value of objects in an array
    console.log(i)
}

console.log("=------------------")

for (let i=0 ; i<vehicle.length ; i++){
    console.log(vehicle[i])
}
