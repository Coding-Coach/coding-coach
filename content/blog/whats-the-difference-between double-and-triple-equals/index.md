---
title: What's the difference between == and ===?
date: 2020-02-24
tags: ['javascript', 'tutorial', 'js-core']
author: crysfel-villa
image: references.jpg
---
A few months ago I was interviewing a Sr. Frontend Dev and I asked this question, he oviously knew that using triple equals when comparing values is the way to go and that this is a well known best practice in the JavaScript world However, he had some issues explaining the difference between the two.

I think is important to fully understand the difference between the two to avoid potencial issues and bugs in your code, but also we should be able to explain these conceps when mentoring Jr Developers.

In order to exaplain the difference, first we need to understand how truthy and falsy values work in JavaScript and what they are.

### Truthy and Falsy values
In JavaScript, when evaluating a non-boolean type in a boolean expression, the element inherent a boolean value. This is known as a truthy or falsy value.

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

We need to memorize these values, don't bather on the truthy values just learn the falsies and everything else will be true. Now we can move on to the next topic in this tutorial.

### Evaluating values and types
The main diference between the double and triple equals is that the double equals (Also known as Abstract Equality Comparison) will cast the type of both variables and compare the value afterwards, in other words it will not take type into account when running the comparison, for example:

```
const a = 1
const b = '1'

console.log(a == b)  // --> true
console.log(0 == '') // --> true
```

However, the triple equals (also called as Strict Equality) takes the type into consideration. For example:

```
const a = 1
const b = '1'

console.log(a === b)  // --> false
console.log(0 === '') // --> false
```

Now you can see the result is different when we use the strict comparison, even if the two values are truthy the triple equals is also checking for the type, given that the two are different then it returns what we'd expect in the first place.

### How to prevent issues in my code?
It's a very well known practice to always use an strict equality comparison, this will make sure to always compare the value as well as the type of both variables. In my experience I don't recall a time when the double equals was needed and in code reviews people tend to ask to always use a strict comparison.

New JavaScript developers might find this odd and confusing, but it's not all bad. Truthy values are awesome when it comes to accessing properties in objects, for example:

```
const person = undefined
const name = person && person.name || 'No name'

console.log(name) // --> No name
```

As you can see, we are using the truthy values in two different ways here:

1. We can check if the `person` object exist before trying to access a property.
1. If we get a falsy value (due to person being `undefined`) we get the string on the right, which will be the default value the variable `name` will get.

We can also rely on truthy values inside an if statement, for example:

```
if (people) {
  // Do something with people when defined
}
```

Or you can also check if the value is not defined:

```
if (!people) {
  people = []

  // Do something when people is not defined
}
```

We can rely on the truthy values to evalue whether a value is defined or not instead of comparing agains `null` or `undefined`.

Let me know in the comments if you have questions or something is not very clear, I will do my best to answer all comments. You can also tune our live stream every thrusday at 5pm ET and ask live questions!