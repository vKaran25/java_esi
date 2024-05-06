/*let a = [1,2,3,4,false,'not present']
console.log(a);
console.log(a[6]); // undefined
console.log(a.length); // counting will start from one
a[1] = 'hello'
console.log(a[1]); 

//arrays are muttable and can be changed 
console.log(typeof(a));  //type of array is object 

let no =[1,2,3,4,5,6]
for(let i=0;i<=no.length;i++){
    console.log(no[i]);
}
*/

//array methods 

let num = [1,2,3,34]
let b= num.toString()
console.log(b);

let c = num.join("-")//join elements of array using a separator
console.log(c);
console.log(typeof(c)); 

num.pop() // one of the which effect the orignal array
console.log(num);

num.push('my name is karan') //one of the which effect the orignal array
console.log(num);

num.unshift(23)
console.log(num); //add element to the start of array

num.shift()
console.log(num); // remove element to the start of array

