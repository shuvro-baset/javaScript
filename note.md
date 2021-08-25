# todo: javascript 
    - javascript is the world's most popular programming language.
    - its easy to learn.
    - Cached JavaScript files can speed up page loads.
    - javascript codeBlocks.....










# tod0: Var, Let, and Const – What's the Difference?
    * var declarations are globally scoped or function scoped while let and const are block scoped.
    * var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared;   const variables can neither be updated nor re-declared.
    * They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
    * While var and let can be declared without being initialized, const must be initialized during declaration.
# todo: arrow function
    -JavaScript arrow functions are roughly the equivalent of lambda functions in python
    - Arrow functions allow a developer to accomplish the same result with fewer lines of code and approximately half the typing.
    -Arguments objects are not available in arrow functions, but are available in regular functions.
    ------ When Not to Use Arrow Function: ------
        -->in object method don't use arrow functions
        -->Callback functions with dynamic context
        -->When it makes your code less readable
# todo: foreach method
    -forEach function can call array elements recursive way. do the same thing like as map but it did not return. 
    -Function to execute on each element. It accepts between one and three arguments: element, index and array
# todo: map function
    -Instead of manually iterating over the array using a loop, you can simply use the built-in Array.map() method.
    -The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.
    -map function use for creating new array from another array.
    It traverse previous array itself. within the function we can use our own functionality. 
    that function may be predefined or write here.
# todo: filter function
    -The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
    -The syntax for filter is similar to map, except the callback function should return true to keep the element, or false otherwise. In the callback, only the element is required.
# todo: find function
    -The arr.find() method is used to get the value of the first element in the array that satisfies the provided condition. It checks all the elements of the array and whichever the first element satisfies the condition is going to print.