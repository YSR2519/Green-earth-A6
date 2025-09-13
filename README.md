
#### 7) Create a README file to answer the following question-
------------------------------------------------------------------

#### 1) What is the difference between var, let, and const?
Ans: var is function-scoped, let and const are block-scoped. var has hoisting, let and const do not. let variables can be reassigned, const variables cannot be reassigned after initialization.

#### 2) What is the difference between map(), forEach(), and filter()? 
Ans: map(), forEach(), and filter() are all array methods in JavaScript used for iterating over elements, but they serve distinct purposes and produce different outcomes. forEach() is primarily used for iterating through an array to perform an action on each element, such as logging or modifying an external state, and it does not return a new array; its return value is always undefined. In contrast, map() is designed for transforming each element of an array and returns a new array containing the results of applying a provided callback function to every element, leaving the original array unchanged. Finally, filter() is used for creating a new array containing only the elements from the original array that satisfy a specified condition, which is evaluated by a callback function that must return a boolean value, effectively filtering out elements that do not meet the criteria. Therefore, forEach() is for side effects, map() is for transformation, and filter() is for selection.

#### 3) What are arrow functions in ES6?
Ans: Arrow functions are part of ES6 and give a syntactically shorter way of writing function expressions. 

#### 4) How does destructuring assignment work in ES6?
Ans: Destructuring assignment is a powerful feature in JavaScript introduced with ES6.It allows you to unpack values from arrays or properties from objects into distinct variables in a more concise and readable manner.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Ans: Template literals, introduced in ES6, are a modern way to work with strings in JavaScript. Unlike traditional strings that use single or double quotes, template literals use backticks (`\) and allow for string interpolation, meaning you can directly insert variables or expressions into the string using ${}. They also support multi-line strings without the need for \n, making it easier to write readable and clean code. For example, instead of concatenating strings with +, like "Hello, " + name + "!", you can write Hello, ${name}!. Template literals not only improve readability but also allow embedding any JavaScript expression inside the string, such as calculations or function calls. Overall, they are cleaner, more maintainable, and more powerful than traditional string concatenation, especially for complex strings or dynamic content.
