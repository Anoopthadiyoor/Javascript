weatherdata=[
  {district:'Thrissur',weather:28},
    {district:'Palakkad',weather:36},
    {district:'Kozhikod',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakkad',weather:31},
    {district:'Kozhikod',weather:34},

] //array of objects.

  
// print district with its highest temp
// {t:29,p:36,k:34} 
// print district with its highest 

output={}// empty object
for (let data of weatherdata){
    let distname=data['district' ]
    let currenttemp= data['weather']

    if (distname in output){
        let oldtemp=output[distname]
        if (currenttemp>oldtemp){
            output[distname]=currenttemp
        }
    }
   else{
    output[distname]=currenttemp;
   }
}
console.log(output)


//object to array conversion- object.entries(object-name) -nested array

//array sort
console.log(Object.entries(output))
console.log(Object.entries(output).sort((n1,n2)=>n2[1]-n1[1]))

