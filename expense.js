var expenses = [12000,20000,34000,10000,28000,15000,50000];


//Find total expense
var total=0;
for( let i of expenses){

                total+=i
}
console.log(`total : ${total}`)

//Find maximum expense
var max=0
for (let i of expenses ){
    if(i>max){
        max=i
    }
}
console.log('max :', max)

//Find minimum expense
 var min=expenses[0];
for(let i of expenses){
    if(i<min){
        min=i
    }
}
console.log("min :",min)




