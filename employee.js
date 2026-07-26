// [id,name,designation,location,salary,experience]
employee=[
 [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1000,'Nihaan','Developer','Kochi',25000,3],

]

//1 Print all employee name 

console.log("______________________________")

for (let emp of employee){
    console.log(emp[1])
}

//2 Print total number of employee
console.log("________________________________")

console.log(employee.length)




//3 Print developer employee details
console.log("______________________________")

for(emp of employee){
    if(emp[2]=="Developer"){
        console.log(emp)
    }
}

//4 Print all employee details whose salary > 30000
console.log("______________________________")

for(emp of employee){
    if(emp[4]>30000){
        console.log(emp)
    }
}

//5 Print details of employee Laisha
console.log("______________________________")

for(emp of employee){
    if(emp[1]=="Laisha"){
        console.log(emp)
    }
}
//6 Sort employee based on descending order of salary
employee.sort((emp1,emp2)=>emp2[4]-emp1[4]);
console.log(employee)


//7 sort employee based on ascending order of experience
employee
