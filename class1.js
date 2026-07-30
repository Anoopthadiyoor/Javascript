class Employee{
    //instance initialization
    setEmployee(id,name,designation,salary){
        this.empid=id
        this.empname=name
        this.empdesignation=designation
        this.empsalary=salary
        console.log("emp record created")
    }
    printEmployee(){
        console.log(this.empid,this.empname,this.empdesignation,this.empsalary)
    }
}
//to executea clas we need an object
//object/instance
//object creation
//object_name= new classname();

//object 1
emp= new Employee()
emp.setEmployee(1, "anoop","web developer,120000")
emp.printEmployee()

//object 2
emp1= new Employee()
emp.setEmployee(2, "anu","web developer,150000")
emp.printEmployee()
