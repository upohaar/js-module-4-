const person ={
    name: "upohaar",
    address: "Dhamrai",
    age: 23
}
const keys = Object.keys(person)
const values = Object.values(person)
console.log(keys)
console.log(values)

function info(per){
    result=per.name + per.address+"@gmail.com" ;
    return result;
}
console.log(info(person))