function addition(a,b){
    const result=a+b;
    return result;
}
const res = addition(2,8);
//console.log(res)
function giveName(){
    const x = "upo"
    return x;
}
const myName=giveName()
//console.log(myName)

function giveNumber(array){
    let biggest =array[0]
    for (i =1; i<array.length; i++){
        if(array[i]>biggest){
            biggest=array[i];
            
        }
    } 
    return biggest;
}
const arr= [34,45,67,3,556,7]
result=giveNumber(arr)
console.log(result)
