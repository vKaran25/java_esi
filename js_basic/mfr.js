let arr = [1,23,45]
let a = arr.map((value,index,array) =>{
    console.log(value+1,index,array);
})
console.log(a);
//map creates a new array by performing some operations on each elements

let arr2 = [1,2,3,21312,33,2]
let a2 = arr2.filter((a) =>{
    return a<10;
})
console.log(a2);

//also not modify the og array make a new array

let arr3 = [1,2,3,4]

let c = arr3.reduce((h1,h2) =>{
    return h1+h2
})
console.log(c);

let func = ((h1,h2) =>{
    return h1+h2
})
let newarr = arr3.reduce(func)
console.log(newarr);
