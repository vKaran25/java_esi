//functions = a block of code designed to perform a particular task
//function (function name)(parameter1,parameter2,...){
    //code
    //return statement
//}

const sum = (p,q) =>{
    return Math.round(p+q)
}
console.log(sum(9,5.5));
const hello = () =>{
    return console.log("hello world");
}
hello()