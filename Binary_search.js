function binary(arr,target){
    let left=0
    let right=arr.length-1;
    while(left<=right){
        const mid=Math.floor((right+left)/2)
        if(arr[mid]===target){
            return mid;
        }
        if(arr[mid]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
return -1

}
console.log(binary([3,4,5,1,2,734],5))

