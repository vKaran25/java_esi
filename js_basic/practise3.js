let marks = {
    karan : 78,
    karan1 : 32,
    karan2 : 45,
    karan3 : 76
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(`The marks of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}

//using for in loop
for(let key in marks){
    console.log(`the marks of ${key} is ${marks[key]}`);
}
//q3
const corr_no = 19
for(let i=0;i<=10;i++){
    if(i === 19){
        console.log("hello")
    }
}