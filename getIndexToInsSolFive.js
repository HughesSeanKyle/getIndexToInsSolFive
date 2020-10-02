/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution Five
function getIndexToIns(arr, num) {              //1
  // sort and find right index  
  var index = arr                               //2
    .sort((curr, next) => curr - next)          //3
    .findIndex(currNum => num <= currNum);      //4
  // Returns proper answer
  return index === -1 ? arr.length : index;     //5
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*
//1 
Function which takes in two arguments:
  Arg1: an Array
  Arg2: a number/integer.
  
//2
Variable set equal to the input array ([5, 3, 20, 3])

//3
The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

Source - [https://devdocs.io/javascript/global_objects/array/sort]

The sort method will return the original array sorted from lowest to highest. The sort order is determined by the return statement. If the return statement were to be next - curr the sort order would be from highest to lowest.

//4
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.

Source - [https://devdocs.io/javascript/global_objects/array/findindex]

The test passed into the findIndex method will have a callback function that checks if the current index value in the sorted array ([3, 3, 5, 20]) is less than or equal to the num input value

The sort and findIndex method makes use of arrow functions which were introduced in the ES6 update. They are also making use of chaining

__Resource
  Chaining Methods, also known as Cascading, means repeatedly calling one method after another on an object, in one continuous line of code

  Source - [https://www.tutorialspoint.com/method-chaining-in-javascript#:~:text=JavascriptFront%20End%20TechnologyObject,can%20help%20us%20avoid%20repetition.]

//5
This line makes use of a ternary operator
  it basically states if the index variable (which is now the sorted input array) is strictly equal to -1 (Meaning that the array is empty as seen in the findIndex documentation) return the lenght of the array if it is true (In this case the length of the array would be zero). 

  The false condition in the ternary operator statement (after the colon ":") will return the index position of the num input as findIndex was the last method to be chained onto the index variable. 

  In this case output is 2.

*/

