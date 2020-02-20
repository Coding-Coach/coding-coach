---
title: What's the difference between == and ===?
date: 2020-02-24
tags: ['javascript', 'tutorial', 'js-core']
author: crysfel-villa
image: references.jpg
---
A few months ago I was interviewing a Sr. Frontend Dev and I asked this question, he oviously knew that using triple equals when comparing values is the way to go and that this is a well known best practice in the JavaScript world.

However, he had some issues explaining when it might be usefull to use the double equals and most importantly what is the difference between the two.

I think is important to fully understand the difference between the two to avoid potencial issues and bugs in your code, but also being able to explain these conceps when mentoring Jr Developers.

In order to exaplain the difference, first we need to understand how truthy and falsy values work in JavaScript and what they are.

### Truthy and Falsy values
In JavaScript, when evaluating a non-boolean type in a boolean expression, the element inherent a boolean value. This is known as a truthy or falsy value. To be honest, some of these doesn't make sense and in my personal opinion I think these are bugs in the language.

For example:

```
const a = 1
const b = '1'
const c = [1]

console.log(a == b) // --> true
console.log(a == c) // --> true
console.log(b == c) // --> true
```

What? All true? What is this nonsense? It all boils down to the truthy and falsy inherent values for non-boolean types and we need to learn what types (or values) are evaluated as true or false.

Here's the list of values that are evaluated as true:

1. `true` (Obviously 😂)
1. `'Hi there!'` (a string containing any value)
1. `[]` (an empty array)
1. `[1, 2, 3]` (an array of elements)
1. `{}` (an empty object)
1. `{ a: 1 }` (an object with keys)
1. `function(){}` (an “empty” function)
1. `function(x){ return x }` (a function with content)

And here's the list of values evaluated as false:

1. `false`
1. `0` (a zero number)
1. `''` or `""` (an empty string)
1. `null`
1. `undefined`
1. `NaN`

We need to learn this by memory, don't bather on the truthy values just learn the falsies and everything else will be true. Now we can move on to the next topic in this tutorial.

### Evaluation values and types
The main diference between the double and triple equals is that the double equals doesn't take the type into consideration when evauating an expression, just uses the inherent truthy or falsy value, for example:

```
const a = 1
const b = '1'

console.log(a == b)  // --> true
console.log(0 == '') // --> true
```

However, the triple equals (also called as strict comparison) takes the type into consideration. For example:

```
const a = 1
const b = '1'

console.log(a === b)  // --> false
console.log(0 === '') // --> false
```

That's the main reason 