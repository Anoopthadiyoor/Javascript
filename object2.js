//create an object for car whose properties are {name, model, manufacturer,price}

var car = {
    name: "Honda City",
    model: "sedan",
    manufacturer: "Honda",
    price: "1400000"
}

//1 Display manufacturer information for the car
console.log(`Manufacturer : ${car.manufacturer}`)

//2 Check whether the model is present or not
console.log("model" in car)

//3 Add property varient
car['varient']=['manual']

car['varient'].push("Automatic")
console.log(car)

//4 Add property colour
car['color']=['white',"blue","green","red"]
console.log(car)


