// string properties and methods

let name="john"
console.log(name.length) // prints the length of the string
console.log(name.toUpperCase()) // convert to upper case
console.log(name.toLowerCase()) // convert to lower case


//length of a string

var name="infosys"
console.log(name.length) // prints the length of the string

console.log(name[0]) // charecter at index 0

console.log(name[name.length-1]) // last character of the string

console.log(name.charAt(0)) // prints the character at index 0


let name="anoop k"
let newname=name.replace("k","krishnan")

console.log(newname) // prints the new string after replacing

let s_name="sagar"
let m_name="alias"
let l_name="jacky"

let full_name=s_name.concat(m_name+l_name)
console.log(full_name) // prints the concatenated string
console.log(s_name.concat( m_name))
