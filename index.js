// 1. Ways to print in JavaScript
//console.log("Hello world");
//alert("me");
//document.write("this is a document write")

// 2. JavaScript console API
// console.log("Hello world", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are variables? - Containers to store data values

/*multi
line
comment*/

// var num1 = 34;
// var num2 = 56;
// console.log(num1 + num2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = "This is also a string";

// Objects
var marks = {
        ravi: 34,
        Shubham: 78,
        Praveen: 99.97
    }
    // console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

//var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types:undefined, null, number, string, boolean, symbol(generates unique key everytime we use it)
2. Reference data types: Arrays and Objects

*/

var arr = [1, 2, 3, 4, 5]

// 5. Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a + b);
// console.log("The value of a - b is ", a - b);
// console.log("The value of a * b is ", a * b);
// console.log("The value of a / b is ", a / b);

// Assignment Operators
var c = b;
// c += 2;
// c-=2;
// c*=2;
// c/=2;
// console.log(c);

// Comparision operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

//Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// Logical not

// console.log(!false);
// console.log(!true);

// 6. Functions in JavaScript
function avg(a, b) {
    return (a + b) / 2;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript

/*var age = 41;
// Single if statement
if (age > 8) {
    console.log("You can drink rasna");
}
// If - else statement
// if (age > 8) {
//     console.log("You are not a kid");

// } else {
//     console.log("You are a kid");
// }

// if-else ladder
var age = 31
if (age > 32) {
    console.log("You are not a kid")
} else if (age > 26) {
    console.log("Bachee nahi rahe");
} else if (age > 22) {
    console.log("Yes Bachee nahi rahe");
} else if (age > 18) {
    confirm.log(" 18 Bachee nahi rahe");
} else {
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         //break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element) {
//     console.log(element);
// })
// const ac = 0;
// ac++;
// // ac=ac+1;
let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Praveen");
// myArr.shift();
// const newLen = myArr.unshift("Praveen");
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Praveen is a good boy good Praveen";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(0, 3));
d = myLovelyString.replace("Praveen", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName("button");
tn = document.getElementsByTagName("div");
//console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold"
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an 

// Selecting using Query
// sel = document.querySelector('.container'); // Returns only one element
// console.log(sel);
// sel = document.querySelectorAll('.container'); // Returns all node list
// console.log(sel);

// function clicked() {
//     console.log("The button was clicked");
// }
// window.onload = function() {
//     console.log("The document was loaded");
// }

// Events in JavaScript
// firstContainer.addEventListener('click', function() {
//         document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//         console.log("clicked on Container");
//     })
// firstContainer.addEventListener('mouseover', function() {
//     console.log("Mouse on Container");
// })
// firstContainer.addEventListener('mouseout', function() {
//     console.log("Mouse out of Container");
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function() {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("Mouse down when clicked on Container");
// })

// Arrow Functions
// function sum(a, b) {
//     return a + b;
// }
summ = (a, b) => {
    return a + b;
}

logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>";
    console.log("I am your log");
}

// SetTimeout and SetInterval
// clr = setTimeout(logKaro, 5000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// clr = setInterval(logKaro, 2000);

// JavaScript localStorage
// localStorage
// localStorage.setItem('name','Praveen');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear()

// Json
// obj = { name: "Praveen", length: 1, a: { this: 'tha\\"t' } }
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Praveen","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`);