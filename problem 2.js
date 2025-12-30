//array er vitore boolean koyti ache count kore dekhao


const x =[23,45, true, "hellow", 34, false,true]
function countBoolean(array){
    if(!Array.isArray(array)){
        return "type valid array"
    }
    let count = 0;
    for( let i of array){
        if(typeof i === "boolean"){
           count ++
        }
    }   
    return count; 
}
console.log(countBoolean(x))   