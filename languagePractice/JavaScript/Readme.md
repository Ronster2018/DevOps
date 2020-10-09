# Javascript  Notes

> This is a collection of notes and examples of python to better myself as a python programmer.

<!-- toc -->
- [Functions](#functions)
  * [Arrow Function](#arrow-function)
    * [This And Arrow Functions](#this-and-arrow-functions)
- [What is OOP?](#what-is-oop)
   * [Core Concepts](#core-concepts)

<!-- end toc -->
## Functions

### Arrow Function
 - Arrow Functions allow us to write shorter function syntax
 - Before
 ```javascript
 hello = function(){
     return "Hello World";
 }
 ```

 - After
```javascript
    hello = () => {
    return "Hello World";
 }
```

 - It can get shorter. If the function has one statement and that statement returns a value, you can remove the brackets and the return keyword

```javascript
    hello = () => "Hello World";
```
> Example:
> ```javascript
> <p>This example shows the syntax of an Arrow Function, and how to use it.</p>
> <p id="demo"></p>
>    <script>
>       var hello;
>
>       hello = (val, val2) => {
>           return val + val2;
>        }
>    document.getElementById("demo").innerHTML = hello("Hello ", >"World!");
>    </script>
>```

- Arrow function with Parameters
```javascript
hello = (val) => "Hello" + val;
```
or
```javascript
hello = val => "Hello" + val;
```

#### This and Arrow Functions