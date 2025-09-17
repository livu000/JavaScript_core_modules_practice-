let greeting = 'Hello! I am Vishwanath';
console.log(greeting);


// object 
let object1 = {
    name : "Vishwanath",
    age : 22,
    isAdult : true,
    hobbies : ['coding',"reading", 'traveling'],
    address : {
        street : 'near school motu falitu',
        village : 'jhank',
        taluka : 'dediapada',
        district : 'narmada',
        state : 'gujarat',
        country : 'india'
    }
};
console.log ("My name is " + object1.name + " and I am " + object1.age + " years old.");
console.log ("I live in " + object1.address.village + ", " + object1.address.taluka + ", " + object1.address.district + ", " + object1.address.state + ", " + object1.address.country + ".");

// array
let array1 = ['apple', 'banana', 'mango','grapes'];
console.log("First fruit is " + array1[0]);
console.log("Second fruit is " + array1[1]);
console.log("Third fruit is " + array1[2]);
console.log("Fourth fruit is " + array1[3]);
//insert element in array to end
array1.push('orange');
console.log("Fifth fruit is " + array1[4]);
//remove last element from array
array1.pop();
console.log("After removing last fruit, array is: " + array1);
//insert element in array to start
array1.unshift('orange');
console.log("After inserting orange at start, array is: " + array1);
//remove first element from array
array1.shift();
console.log("After removing first fruit, array is: " + array1);
//check index of element
let index = array1.indexOf('mango');
console.log("Index of mango is: " + index);
//length of array
let length = array1.length;
console.log("Length of array is: " + length);


//Function
function add(a,b) {
    return a + b;
}
console.log("Addition of 5 and 10 is: " + add(5,10));
function multiply(x,y){
    return x*y;
}
console.log("Multiplication of 5 and 10 is: " + multiply(5,10));    
function isEven(num){
    return num % 2 === 0;
}
console.log("Is 10 even? " + isEven(10));
console.log("Is 5 even? " + isEven(5));