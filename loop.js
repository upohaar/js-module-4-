// for(let i=1; i<=10; i++){
//     // console.log("upo",i)
// }
const flowers=["jui","sapla","joba","golap"];
//console.log(flowers.length)
for (let i =0; i<flowers.length; i++){
    //console.log(flowers[i])
  
}

let i = flowers.length-1;
while(i>=0){
    //console.log(flowers[i])
    i--
}

for (let item of flowers){
 //   console.log(item)
}
let n =4;

for(let i=1; i<=n; i++){
    let row="";
    for(let j=1; j<=n-i; j++){
        row= row+ " ";}
    for(let k=1; k<=2*i-1; k++){
            row+="*";
        }
   // console.log(row)
}


numbers=[102,2,34,56,23,65]
let biggest = numbers[0];
for (let i=1 ; i<numbers.length; i++){
    if(numbers[i]>biggest){
        biggest=numbers[i]
    }
}
console.log(biggest)