## Section Objectives
How can we explain the efficiency of a program ?
... If you are reading thig. Note to you. I'm going into the dark a bit as I need to prepare for an interivew... might be a while before I have time for this.

<details><summary>Why is simply measuring a program with timmers not a suitable way of understanding it's efficiency?</summary>
<p>

#### There are too many variables impacting the understanding
The objective is to  measure the runtime between algorithms. If there are to many variables, it's difficult to isolate the algorithm to compare behaviour.
Variables

* between implementations
* between computers
* between imputs

</p>
</details>
<details><summary>As an exercies, write a recursive function to multiply two numbers together using only the addition (+) symbol.
</summary>
<p>
See the second part of ```linearComplexity.js```
</p>
</details>
<details><summary>Write a Fibonacci recursive function  using the addition (+) symbol.</summary>

See the program ```exponentialCompexity.js``` which is a short piece of code to calculate Fibonacci using recursion. Notice that the program is inefficient at high input values.

Two things to notice:

* The 39th Fibonacci takes some time to complete;
* The 100th number in the Fibonacci sequence is unlikely to complete. Uncomment it and run it.

</details>
<details><summary>Why would you use memoization?.</summary>

see ```memoization.js```

Memoization is a method where previously calculated information is used to improve the efficiency of a program by storing an only doing a lookup when the information is required. The attached code takes the Fibonacci example and speeds it up for higher numbers. Included is this code is the use of a callback function.

Notice:
* This version of the program calculates Fibonacci 39th term 
* It even caluculate the Fibonacci of the 100th term 
* The memoization process has a major impact on program effciency. There is even the inclusion of the 1000th term. 

</details>
