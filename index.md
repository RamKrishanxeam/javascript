Basic JavaScript Questions:
1) What are the different data types in JavaScript?

Strings, Numbers, Boolean, Object, Array, Null, Undefined, Symbol (ES6), BigInt (ES11).

2) What is the difference between == and === in JavaScript?

== (loose equality) compares values, performing type coercion if necessary.
=== (strict equality) compares both values and their types.

3) What are closures in JavaScript?

A closure is a function that "remembers" its lexical scope, even when the function is executed outside that scope.

4) What is the difference between null and undefined?

undefined is a variable that has been declared but not yet assigned a value.
null is an intentional assignment of no value.

5) What is the this keyword in JavaScript?

this refers to the context in which the function is executed, and its value depends on how the function is called.
Intermediate JavaScript Questions:

6) What is event delegation in JavaScript?

Event delegation is a technique in which an event listener is added to a parent element rather than individual child elements. The event listener uses event bubbling to handle events from child elements.


7) What is the difference between var, let, and const?

var is function-scoped or globally-scoped and can be re-declared.
let is block-scoped and cannot be re-declared in the same scope.
const is block-scoped and creates a read-only reference to a value.
Explain the concept of promises in JavaScript.

A promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
What is a callback function?

A callback function is a function passed into another function as an argument, which is then invoked after some operation is completed.
What is the difference between synchronous and asynchronous code in JavaScript?

Synchronous code runs sequentially, blocking the execution of the rest of the program until the current task completes.
Asynchronous code allows the program to run other tasks while waiting for some operation (like a network request) to finish.
Advanced JavaScript Questions:
What is the event loop in JavaScript?

The event loop is a mechanism that handles asynchronous operations by placing events in a queue and executing them when the call stack is empty.
What are JavaScript modules?

Modules allow code to be split into smaller, reusable pieces. ES6 introduced import and export for handling modules.
What are the differences between Object.create() and new?

Object.create() creates a new object with the specified prototype object and properties, while new is used to create an instance of a constructor function, setting the prototype of the new object to the constructor’s prototype.
What is the spread operator in JavaScript?

The spread operator (...) allows an iterable (like an array or object) to be expanded into individual elements or properties.
Explain the concept of destructuring in JavaScript.

Destructuring is a shorthand for extracting values from arrays or objects and assigning them to variables.
What is the difference between setTimeout() and setInterval()?

setTimeout() runs a function once after a specified delay.
setInterval() runs a function repeatedly at the specified interval.
What are arrow functions, and how do they differ from regular functions?

Arrow functions are a shorthand for writing functions. They don't have their own this context and instead inherit it from the surrounding scope.
What are higher-order functions in JavaScript?

Higher-order functions are functions that take other functions as arguments or return functions as results.
What is the bind() method in JavaScript?

The bind() method creates a new function that, when invoked, has its this value set to a specific object, and can also accept initial arguments.
Explain the concept of promises chaining in JavaScript.

Promise chaining is the process of linking multiple promises together, where each then() handler in the chain returns a new promise.
Bonus: Practical/Behavioral Questions:
How do you handle errors in JavaScript?

Errors can be handled using try...catch blocks, and asynchronous errors can be handled with .catch() in promise chains or using async/await with try...catch.
Explain event propagation in JavaScript (bubbling vs capturing).

Event propagation refers to how events travel through the DOM. In bubbling, events propagate from the target element up to the root, while in capturing, events propagate from the root down to the target element.
