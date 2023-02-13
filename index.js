/*
1. How do we assign a value to a variable?
 With the assignment operator 

2. How do we change the value of a variable?
To create a changeable variable in JavaScript, use the let keyword. Use change_value function


3. How do we assign an existing variable to a new variable?
using the assignment operator.
var a = 1;
var b = a;
b = 2;
console.log(a); // 1
console.log(b); // 2

4. Remind me, what are declare, assign, and define?
 creating a variable is called as "Declaring" a variable in JavaScript: var test; (test is the name of the declared variable.)
 test = 10; After the declaration, we can use the equal(=) sign to assign value to the variable: test is the name of the variable, and the assigned value is 10.
 var test = 10; where var is the keyword to declare the variable, and the test is the name of the variable, and the assigned value is 10.
 
 
5. What is pseudocoding and why should you do it?
It is used for creating an outline or a rough draft of a program. Pseudocode summarizes a program's flow, but excludes underlying details.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


*/

/* Create a variable called firstVariable
var firstVariable;


Assign it the value of the string "Hello World"
firstVariable = "Hello World"

Change the value of this variable to some number
var firstVariable = "Hello World";

Store the value of firstVariablein a new variable called secondVariable
var secondVariable = firstVariable;

Change the value of secondVariableto any string.
secondVariable = "Hello";

What is the value of firstVariable?

Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean */

let yourName = "Deja";

console.log(("Hello, my name is " + yourName));

// booleans

/* Declare a variable animal. Set it to be either "cow" or something else */
let animal = 'cow';
/* Write code that will print out "mooooo" if the it is equal to cow */
if (animal == 'cow') {
  console.log('mooooo');
}
/* Change your code so that if the variable animals anything other than a cow, it will print "Hey! You're not a cow." */

else   (animal == 'dog', 'cat', 'bird');
{ console.log("Hey! You're not a cow.");
}
/* Commit */
console.log('dog')


/* Make a variable that holds a person's age; be semantic */
let age = 26;
/* Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young." */
if (age >= 16) {
  console.log('Here are the keys!');
} else 
  (age < 16)
{ console.log('Sorry,youre too young.');
}
/* commit */
console.log('14')


/* Write a loop that will print out all the numbers from 0 to 10, inclusive */
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
/* Write a loop that will print out all the numbers from 10 up to and including 400 */
for (var i = 10; i <= 400; i++) {
  console.log(i);
}
/* Write a loop that will print out every third number starting with 12 and going no higher than 4000 */
for (var i = 12; i <= 4000; i += 3) {
  console.log(i);
}
