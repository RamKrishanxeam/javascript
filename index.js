//📌 🔹 Variables & Data Types in JavaScript

// let nameUser = "dd";
// let nameUser = "dd";
// SyntaxError: Identifier 'nameUser' has already been declared
// let से एक ही नाम का वेरिएबल दोबारा डिक्लेयर नहीं किया जा सकता, इसलिए SyntaxError आ रहा है।

// var nameUser = "dd";
// var nameUser = "dd";
// 1️⃣ var का उपयोग (जो दोबारा डिक्लेयर हो सकता है, लेकिन यह पुराना तरीका है और इस्तेमाल नहीं करना चाहिए)

// const nameUser = "dd"; वैल्यू फिक्स रहेगी
// const nameUser = "dd";  यह एरर देगा, क्योंकि `const` की वैल्यू बदली नहीं जा सकती
// const का उपयोग (अगर वैल्यू बदलनी न हो) इसलिए यह एरर आ रहा है।

// 📌 Primitive Data Types (Simple Values)

// 1️⃣ String
// const name = "dd";
// console.log(name);
// console.log(typeof name);

// 2️⃣ Number
// const age = 25;
// console.log(age);
// console.log(typeof age);

// 3️⃣ Boolean
// const isMarried = false;
// console.log(isMarried);
// console.log(typeof isMarried);

// 4️⃣ Null Empty value
// const car = null;
// console.log(car);

// 5️⃣ Undefined Not assigned a value
// let test;
// console.log(test);
// console.log(typeof test);

// 📌 Reference Data Types (Objects)

// 1️⃣ Array List of values

// const hobbies = ["movies", "music"];
// console.log(hobbies);
// console.log(typeof hobbies);

// 2️⃣ Object literal Collection of key-value pairs
// const address = {
//   city: "Delhi",
//   state: "DL",
// };
// console.log(address);
// console.log(typeof address);

// 3️⃣ Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// 4️⃣ Function Reusable code block
// const hello = function () {
//   console.log("Hello");
// };

// console.log(hello);
// console.log(typeof hello);

//  📌 5️⃣ Symbol
// Symbol JavaScript का एक डेटा टाइप है, जिसका उपयोग यूनिक वैल्यू बनाने के लिए किया जाता है।
// जब भी आप Symbol() का उपयोग करते हैं, यह हमेशा यूनिक (अलग) वैल्यू देता है, भले ही उसकी वैल्यू एक जैसी दिखे।

// let sym1 = Symbol("id");
// let sym2 = Symbol("id");

// console.log(sym1 === sym2);
// 1️⃣ यूनिक प्रॉपर्टी बनाने के लिए (ताकि कोई दूसरी स्क्रिप्ट उसे ओवरराइट न कर सके)।
// 2️⃣ Symbol का उपयोग करके आप एक यूनिक प्रॉपर्टी बना सकते हैं।
// 3️⃣ यह एक डेटा टाइप है जिसकी वैल्यू यूनिक होती है।

// let user = {
//   name: "Rahul",
//   [Symbol("id")]: 101,
// };

// console.log(user);

// { name: 'Rahul', [Symbol(id)]: 101 }

//  📌 6️⃣ Map
// Map एक key-value pair का collection होता है। इसमें key और value के बीच एक relation होता है।
// यह एक object की तरह है, लेकिन यहाँ key को अन्य data type के रूप में भी store किया जा सकता है।

// const map = new Map();
// set() का उपयोग करके हम कोई भी डेटा टाइप key के रूप में उपयोग कर सकते हैं।

// map.set("name", "Rahul");
// map.set("age", 25);
// console.log(map);

// 7️⃣ Set

// Set एक collection होता है जिसमें कोई भी value एक ही बार होती है। यह एक अद्वितीय value को store करता है।
// यह एक object की तरह है, लेकिन यहाँ value को अन्य data type के रूप में भी store किया जा सकता है।

// const set = new Set();
// set.add("Rahul");
// set.add("25");
// console.log(set);

// 📌 JavaScript Array Methods

// JavaScript में length एक प्रॉपर्टी है, जो किसी array में मौजूद items (elements) की कुल संख्या बताती है।
// यह एक नॉन-नेगेटिव पूर्णांक होता है।
// जब आप एक array को declare करते हैं, तो उसकी length 0 होती है।

// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);

// 1️⃣ push() Method
// push() method एक या एक से अधिक elements को array के अंत में add करता है।

// const fruits = ["Apple", "Banana"];
// fruits.push("Orange");
// console.log(fruits);

// 2️⃣ pop() Method
// pop() method array के अंतिम element को remove करता है।

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.pop();
// console.log(fruits);

// 3️⃣ shift() Method
// shift() method array के पहले element को remove करता है।

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.pop();
// console.log(fruits);

// 4️⃣ unshift() Method
// unshift() method array के पहले element को add करता है।

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.unshift("Mango");
// console.log(fruits);

// 5️⃣ indexOf() Method
// indexOf() method array में element की position (index) को return करता है।
// यदि element array में available नहीं है, तो -1 return करेगा।

// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits.indexOf("Banana"));

// 6️⃣ includes() Method
// includes() method array में element की presence को check करता है।
// includes() एक Array और String मेथड है, जो यह चेक करता है कि कोई वैल्यू (element या substring) मौजूद है या नहीं।
// अगर वैल्यू मौजूद है, तो यह true रिटर्न करता है, वरना false।
// यह एक boolean value return करता है।

// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits.includes("Apple"));

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.includes(20, 1));

// const data = [NaN, undefined, null];
// console.log(data.includes(NaN));
// console.log(data.includes(undefined));

// 7️⃣ reverse() Method
// reverse() method array के elements को reverse order में करता है।

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.reverse();
// console.log(fruits);

// 8️⃣ slice() Method

// slice() method array के elements को copy करता है।
// यह दो arguments लेता है।
// 1️⃣ start (optional) - copy करने की शुरुआत का index
// 2️⃣ end (optional) - copy करने की अंतिम index
// slice() method एक नया array return करता है।
// slice() JavaScript का एक Array और String method है, जो array या string का एक हिस्सा
// (sub-array या substring) निकालने के लिए उपयोग होता है।

// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log(fruits.slice(2, 2));
// Index 2 से शुरू हुआ और आखिरी तक पूरा लिया।
// console.log(fruits.slice(2));
// console.log(fruits.slice(-2));
// नेगेटिव इंडेक्स उपयोग करने पर उसी तरह का आउटपुट मिलेगा।
// यहाँ -2 दिया गया है, इसलिए दूसरे आखिरी वैल्यू लिया गया है।
// यह एक नया array return करेगा।
// const slicedNames = fruits.slice(1, -1);
// console.log(slicedNames);

// const content = "JavaScript is awesome";
// console.log(content.slice(0, 14));
// 🔹 पहले 10 अक्षर लिए।

// const sentence = "Hello, World!";
// console.log(sentence.slice(7));
// 🔹 इंडेक्स 7 से शुरू होकर आखिरी तक का टेक्स्ट लिया।

// 9️⃣ splice() Method
// splice() method array के elements को remove, replace और add करता है।
// यह तीन arguments लेता है।
// 1️⃣ start - remove करने की शुरुआत का index
// 2️⃣ deleteCount - remove करने की कुल संख्या
// 3️⃣ items - add करने के लिए elements
// splice() method एक नया array return करता है।

// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// fruits.splice(1, 3, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// 1️⃣ forEach() Method
// forEach() JavaScript का एक Array method है, जो हर एक element पर
// एक function को चलाने के लिए उपयोग किया जाता है।
// यह loop की तरह काम करता है, लेकिन ज़्यादा readable और आसान होता है।
// ❌ यह कोई नया array नहीं बनाता और return भी नहीं करता।
// forEach() method array के elements पर function को call करता है।
// यह तीन arguments लेता है।
// 1️⃣ item - current element
// 2️⃣ index - current index
// 3️⃣ arr - current array
// forEach() method कोई value return नहीं करता है।
// index से element की position और arr से पूरा array access कर सकते हैं।

// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// let users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 30 },
//   { name: "Rohan", age: 28 },
// ];
// users.forEach((element, index, arr) => {
//   console.log(element, index, arr);
// });

// 🔹 forEach() vs map() में अंतर

// forEach() method कोई value return नहीं करता है, जबकि map() method एक नया array return करता है।
// forEach() method कोई array नहीं बनाता, जबकि map() method एक नया array बनाता है।

// 2️⃣ map() Method

// map() JavaScript का एक Array method है, जो हर एक element पर function चलाकर एक नया array बनाता है।
// ✅ यह original array को नहीं बदलता, बल्कि एक नया modified array return करता है।
// map() method array के elements पर function को call करता है।
// यह तीन arguments लेता है।
// 1️⃣ item - current element
// 2️⃣ index - current index
// 3️⃣ arr - current array

// const users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 30 },
//   { name: "Rohan", age: 28 },
// ];

// const newUsers = users.map((element, index) => {
//   console.log(element, index);
// });

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mobile", price: 20000 },
//   { name: "Tablet", price: 30000 },
// ];

// const newProducts = products.map((element, index) => {
//   console.log(element.price, element.price * 0.1);

//   return { name: element.name, price: element.price - element.price * 0.1 }; // 10% Discount
// });

// console.log(newProducts);

// 3️⃣ filter() Method
// filter() method array के elements को filter करता है।
// यह एक नया array return करता है।
// filter() method array के elements पर function को call करता है।
// यह तीन arguments लेता है।

// 1️⃣ item - current element
// 2️⃣ index - current index
// 3️⃣ arr - current array

// const users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 30 },
//   { name: "Rohan", age: 28 },
// ];

// const newUsers = users.filter((element, index) => {
//   return element.name === "Neha";
// });

// console.log(newUsers);

// 🔹 map() vs forEach() में अंतर
//             map()  forEach()
// Return करता है?	✅ हां	❌ नहीं
// नया Array बनाता है?	✅ हां	❌ नहीं
// Use कब करें? जब नया array चाहिए 	जब कुछ करना हो (Print, API Call)

// 4️⃣ reduce() Method
// reduce() method array के elements को reduce करता है।
// यह एक नया value return करता है।
// reduce() method array के elements पर function को call करता है।
// यह चार arguments लेता है।
// 1️⃣ accumulator - total value
// 2️⃣ item - current element
// 3️⃣ index - current index
// 4️⃣ arr - current array
// reduce() JavaScript का एक Array method है,
//  जो array के सभी elements को जोड़कर एक ही value में बदल देता है।
// यह हर element पर function चलाकर एक final result return करता है।
// इसका उपयोग total, average, objects को merge करने, और complex calculations के लिए होता है।

// const numbers = [10, 20, 30, 40, 50];

// const total = numbers.reduce((accumulator, item, index, arr) => {
//   //   console.log(accumulator, item, index, arr);
//   return accumulator + item;
// });

// console.log(total);

// 5️⃣ find() Method

// find() method array के elements में first element को return करता है, जो function के condition को satisfy करता है।
// यह एक single value return करता है।
// find() method array के elements पर function को call करता है।
// find() JavaScript का एक Array method है, जो पहला ऐसा element return करता है
//  जो दिए गए condition को पूरा करता है।
// यह सिर्फ़ पहला matching element return करता है, ना कि पूरा array।
// अगर कोई element match नहीं होता, तो यह undefined return करता है।

// const users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 30 },
//   { name: "Rohan", age: 28 },
// ];

// const user = users.find((element, index) => {
//   //   return element.name === "ggdg"; //undefined
//   return element.name === "Rohan";
// });

// console.log(user);

// 6️⃣ findIndex() Method

// findIndex() JavaScript का एक Array method है, जो पहला ऐसा element का
// index return करता है जो दिए गए condition को पूरा करता है।
// अगर element मिलता है, तो उसका index return करता है।
// ✅ अगर element नहीं मिलता, तो -1 return करता है।

// const users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 30 },
//   { name: "Rohan", age: 28 },
// ];

// const userIndex = users.findIndex((element, index) => {
//   return element.name === "Rohan";
// });

// console.log(userIndex);

// 7️⃣ some() Method
// some() एक JavaScript Array method है,
//  जो यह check करता है कि क्या array में कोई भी element condition को match करता है या नहीं।
// ✅ अगर कोई भी एक element condition को satisfy करता है, तो true return करता है।
// ✅ अगर कोई भी element match नहीं करता, तो false return करता है।
// 🔹 जैसे ही some() को पहला matching element मिल जाता है, यह तुरंत true return कर देता है और बाकी elements को check नहीं करता।
// const users = [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 30 },
//   { name: "Rohan", age: 28 },
// ];

// const IsUser = users.some((element, index) => {
//   //   return element.name === "Rohan";
//   return element.age >= 30;
// });

// console.log(IsUser);

// 8️⃣ every() Method
// console.log(3 + false);

// let message = "global good";
// function hello() {
//   let message = "I am outer!";
//   console.log("", message);
//   let c = function hello1() {
//     console.log("i am c", message);
//   };
//   return c;
// }

// c = hello();
// c();

// Global Scope (वैश्विक स्कोप):
// JavaScript में यदि कोई वेरिएबल फ़ंक्शन के बाहर परिभाषित होता है, तो वह global scope में आता है।

// let globalvar =
//   "A global variable is a public variable defined outside a function.";

// function globalScope() {
//   console.log(globalvar);
// }

// globalScope();

// 2. Local Scope (स्थानीय स्कोप):
// Local Scope वह स्कोप होता है जो किसी फ़ंक्शन के भीतर होता है।

// Local scope को दो भागों में बाँटा जा सकता है:
// Function Scope: यदि वेरिएबल या फ़ंक्शन को किसी फ़ंक्शन के अंदर परिभाषित किया जाता है।
// Block Scope: अगर वेरिएबल या फ़ंक्शन को {} (ब्लॉक) के अंदर परिभाषित किया जाता है (जैसे let, const के साथ)।

// function localScope() {
//   let localVar =
//     "A local variable is a private variable defined inside a function."; // Local Scope (Function Scope)
//   console.log(localVar);
// }

// localScope();

// Block Scope with var
// var का स्कोप function scope है, न कि block scope।
// यदि var को किसी ब्लॉक के अंदर डिक्लेर किया जाता है, तो वह वेरिएबल पूरे फ़ंक्शन के भीतर उपलब्ध होगा, जो कि उस ब्लॉक से बाहर है।

// function outerFunction() {
//   let outerVar = "I am outer!";

//   function innerFunction() {
//     console.log(outerVar); // innerFunction को outerVar का एक्सेस है
//   }

//   return innerFunction;
// }

// let closureExample = outerFunction(); // innerFunction को outerFunction के भीतर से लौटाया गया है
// closureExample();

// a is global variable defined outside the function:
// let a = 10;

// function abc() {
//   console.log(a * 2);
// }
// abc();

// a is a local variable defined inside the function:
// function abc() {
//   let a = 10;
//   console.log(a * 2);
// }
// abc();

// function count() {
//   let a = 10;
//   // Return an inner function which closes over the count variable
//   function count() {
//     console.log(a * 2);
//   }
//   return count;
// }
// const counter = count();
// counter();

// Callback एक फंक्शन होता है जो किसी Asynchronous ऑपरेशन के बाद कॉल किया जाता है। यह फंक्शन back करके परिणाम देता है।

// console.log("Callback 1");

// setTimeout(function () {
//   console.log("Callback 2");
// }, 2000);

// console.log("Callback 3");

// Synchronous Programming(सिंक्रोनस प्रोग्रामिंग)
// एक प्रकार की Programming होती है, जिसमें कोड के हर हिस्से को एक-एक करके, उसी क्रम में, निष्पादित किया जाता है।
// यानी, जब तक कोई कार्य पूरा नहीं हो जाता, तब तक अगला कार्य शुरू नहीं होता है।

// let a = prompt("Task 1 is starting...");
// let b = prompt("Task 2 is starting...");
// let c = prompt("Task 3 is starting...");
// console.log(a, b, c);

// function task1() {
//   console.log("Task 1 is starting");
//   for (let i = 0; i < 1000000000; i++) {}
// }

// function task2() {
//   console.log("Task 2 is starting");
//   for (let i = 0; i < 1000000000; i++) {}
// }

// task1();
// task2();

// Asynchronous JavaScript
// JavaScript में "Asynchronous"

// जब कोई Asynchronous कार्य चल रहा होता है, तो बाकी का कोड बिना किसी रुकावट के चलता रहता है।
// इसका उपयोग तब किया जाता है जब आपको लंबी-running प्रक्रियाएं जैसे कि API Call, Data Fetching या Timer का इस्तेमाल करना होता है।
//  ऐसा JavaScript कोड जिसे समय लेने वाली प्रक्रियाएं (जैसे API कॉल्स, डेटाबेस से डेटा प्राप्त करना, आदि) बिना रुकावट के चलने दें।
// console.log("start");
// setTimeout(() => {
//   console.log("Asynchronous JavaScript");
// }, 3000);
// console.log("end");

// Async/Await के साथ API से डेटा प्राप्त करना

// async function fetchUserData() {
//   try {
//     console.log("डेटा लोड हो रहा है...");
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("नेटवर्क समस्या!");
//     }

//     let users = await response.json();

//     console.log("प्राप्त यूज़र डेटा:", users);
//   } catch (error) {
//     console.log("एरर:", error);
//   }
// }

// fetchUserData();

// Promise के साथ API से डेटा प्राप्त करना
// async function fetchUserData() {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((user) => {
//       console.log(user);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetchUserData();

// Callbacks | JavaScript

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC" + src);
    callback(src);
  };
  document.body.appendChild(script);
}

function hello(src) {
  alert("Loaded script with SRC:", src);
}

loadScript("https://code.jquery.com/jquery-3.6.0.min.js", hello);
