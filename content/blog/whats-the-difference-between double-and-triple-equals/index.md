---
title: What's the difference between == and ===?
date: 2020-06-01
tags: ['javascript', 'tutorial', 'js-core']
author: crysfel-villa
image: dogs.jpg
---
A few months ago I was interviewing a Sr. Frontend Dev and I asked this question, he oviously knew that using triple equals when comparing values is the way to go and that this is a well known best practice in the JavaScript community. However, he had some issues explaining the difference between the two.

I think is important to fully understand the difference between the two to avoid potencial issues and bugs in your code, but also we should be able to explain these conceps when mentoring Jr Developers.

### Abstract Equality Comparison
The main diference between the double and triple equals is that the double equals (Also known as Abstract Equality Comparison) will cast the type of both variables and compare the value afterwards, in other words it will check the types if both are different it will convert them to the same type and then execute the comparison, for example:

```
const a = 1
const b = '1'

console.log(a == b)  // --> true
console.log(0 == '') // --> true
```

In the previous snippet, `b` is a string with a `'1'` value, but when the compiler executes the comparison, it will cast the `'1'` string to a `1` number (because number comparison is faster) and then will compare both numbers.

As you can see the comparison algorithm is not ignoring the type, but rather converting both to the same time before comparing the values.

### Strict Equality Comparison
However, the triple equals (also called as Strict Equality) takes the type into consideration when runing the comparison. For example:

```
const a = 1
const b = '1'

console.log(a === b)  // --> false
console.log(0 === '') // --> false
```

Now you can see the result is different when we use the strict comparison, the triple equals is not casting the type but rather returning `false` if types are different, the comparison algorithm is not even checking the values, because the type comparison is already returning `false`.

### When to use one or the other?
Now the question is, how do we know when to use double or triple equals when writing a comparison? For most cases a triple comparison would be preferred to avoid potential bugs.

However, in some instances using double equals might make sense, for example let's say you want to check that a value is defined and is not null, you can write something like this:

```
const value = undefined;

if (value == null) {
  console.log('This value is `null` or `undefined`')
}
```

If you use the triple equals for that comparison, then you will have to explicitly check for both cases, otherwise is not going to work, because `null` is different than `undefined`:

```
const value = undefined;

if (value === null || value === undefined) {
  console.log('This value is `null` or `undefined`')
}
```

### Conclusion
As we all know, you will be safer to just use triple equals at all times, and that's why linters force you to do that, but understanding the difference between the two is very important.

Let me know in the comments if this was useful or if you still have questions regarding this topic.