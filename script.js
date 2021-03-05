//jss
var timer = 120
var timerStart = document.querySelector("#start");
var countE1 = document.querySelector(".count");
//submitE1 = document.querySelector(#submit); submit final results with initials
timerStart.addEventListener("click", function () {

    instructions.style.visibility = "hidden";
    start.style.visibility = "hidden";

    countDown();
});
var countDown = function (timer) {

    for (i = timer; i > 0; i--) {
        countDown(timer);
        console.log(i);
        countE1.textContent = count;
    }
};

//submitE1.addEventListener("click, initials")

/*
1C From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd'] *
3
2
1
0

2A What are the six primitive data types in JavaScript?
string, number, boolean, bigInt, symbol, undefined
sentence, float, data, bigInt, symbol, undefined
sentence, int, truthy, bigInt, symbol, undefined
string, num, falsy, bigInt, symbol, undefined

3D  How do we declare a conditional statement in JavaScript? *
difference...between
for loop
while loop
if...else

4C How do we stop a loop from from repeating indefinitely? *
When we have iterated through half of the condition.
We have to explicitly end the loop with the break keyword.
A loop will stop executing when the condition is false.
A loop will stop executing when the condition is true.

5B As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use? *
concat() and shift()
pop() and unshift()
push() and sort()
forEach() and pop()

6D Inside the HTML document, where do you place your JavaScript code? *
In the <footer> element
Inside the <head> element
Inside the <link> element
Inside the <script> element
*/