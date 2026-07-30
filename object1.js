var  emp={
    id: 1,
    name: "Anoop",
    designation:"Web-developer",
    salary:55000,
    experience:4
}
console.log(emp)
console.log(emp['designation'])
console.log(emp.name)

//   to check whether a paticulr key is present

//    in  operator - used to check whether a paticulr key is present in the emloyee object, 
//                   a boolen value will be returned

console.log("experience" in emp)
console.log("gender" in emp)


/////////////////     Add or insert a new key/value pairs to the object
// object_name['key']=value

emp["gender"]="male"
console.log(emp)

// Add isvaccinated or not
emp.isvaccinated=true;
console.log(emp)

// Add vaccine
emp.vaccine="covishield"
console.log(emp)


////////////////   update

emp.vaccine="covaxin"
console.log(emp)

///////////////    increment a value
emp.salary+=2000
console.log(emp)


///////////////     Print  key value pairs one by one
for( let key in emp){
    console.log(`${key} : ${emp[key]}`)
}

///////////////     To delete a key from an array
delete emp.vaccine
console.log(emp)
