function linear(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
              
    }
        return -1;
}

console.log(linear([1,3,7,12,34],7));


/////// string ///////////////////////////////

var rainbow=['violet',"blue","green","yellow"]
function linear(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
              
    }
        return null;
}

console.log(linear(rainbow,"green"));
console.log(linear(rainbow,"indigo"));
