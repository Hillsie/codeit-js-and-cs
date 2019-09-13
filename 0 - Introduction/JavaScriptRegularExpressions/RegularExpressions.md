# Section Regular Expressions
Regular Expressions are JavaScript Objects too, you know!

This section is WIP. It's quite tricky to explain regex. Getting to know regex improves with practice.

<details><summary>What are regular Expressions? </summary>
<p>

 Patterns used to match character combinations in a string. Regular expressions are a special subset type of programming language that has commonality amongst the
 different implementations or dialects. Regex is widely implemented. Each implementation taking ideas from the each other.


#### Complexity of Regular expressions
This is a summary. To further understand regular expressions, see Doctor Damian Conway's book Understanding Regular Expressions. You can also find it as a lecture
on O'Reilly Media.
* Non deterministic finite state atomata (NFA) prolly JS. Two paths can take exponential time to build, but constant time to execute. Linear storage. Generally used in dynamic typed languages
* Deterministic finite state atomata (DFA) - single path, Constant time to build, but can take exponential time to run. Generally, compiled languages.

#### How they work - Part 1 - Think of regex as path evaluation
Regular expressions are a type of path algorithim. Not all paths are executed. A way to grasp how it works is to consider this statement `/sole|soul/`  (`|` means or). In NFA automata implementation,  two paths are pre-determined in the code. The first path is `s o l e`   the second path is   `s o u l` . When the regex begins, it checks the string against the word `sole`. If it finds the word, A `match`! and the rest of the string is not checked, even if `soul` exists in the the remainder of the string. Essentially, the regex has resolved. However, if it does not match it will revese the matching path back to `so` and then try the `ul` path as part of the second path evaluation.
Think of it in terms of this code.

```JavaScript
// first it tries to match s o l ... doesn't find l so unwinds and tries u l. Find's it. MATCH... end code
const inputString = "Learning regular expressions gives more soul to your JavaScript sole. Does it return sole or soul, why?";
// The next finds sole and doesn't back track
const oppositeString = "Learning regular expressions gives more sole to your JavaScript soul. Does it return sole or soul, why?";
const regex = /sole|soul/;

let answer = regex.exec(inputString);
console.log(answer);
let answer2 = regex.exec(oppositeString);
console.log(answer2);

```
The regex matches the first 


</p>
</details>
<details><summary>Name 7 Methods (2 with RegExp, 5 with String) that regular expressions can be applied to ?</summary>
<p>

exec, test, match, matchAll, replace, search and split
</p>
</details>
<details><summary>Name 6 special character groups of regular character? In general, what do these special character do?</summary>
<p>

1. Assertions
2. Boundaries
3. Character Classes
4. Groups and Ranges
5. Quantifiers
6. Unicode Property Escapes
</p>

### These special characters describe the matching criterea of regular expressions
</details>
<details><summary> Recall what these characters do ?    ^ $ [a-z] [A-Z] [A-z] [0-9] + * ? [a-zA-Z0-9]{1-3} \a \d \w \n \t ([a-z]+) | </summary>
<p>
Some common one. This is not an entire list.

1. `^`  Begining on the string, inside `[^x]` means not example... not x
2. `$`  End of the string
3. `[a-z]`  Match any character a-z in lower case
4. `+`  one or more
5. `*`  zero or more
6. `?` optional character
7. `{1-3}`  only 1 to 3 characters
8. `\d`  digits
9. `\w` any word character 0-9A-Za-z `\W` is equvalent to ^ not
10. `\s` match a space or whites pace: tab, space, form feed, line feed, and otehr unicode spaces. `\S` equvalent to ^not
11. `\n` new line character
12. `\t` tab
13. `|` or/else. Lowest precidence
14. `( )` gives precidence and use with `|`. Used for grouping
15. `/A B C/` is 5 commands in regex engine. White space matters.
16. `\r` return character
17. `[\b]` Matches backspace.
18. `\b` match word boundary. See Mozilla.org Boundaries
19. `\v` Vertical tab
20. `\f` Form feed
21. `\cA : \cZ`	Control characters
22. `\u0000 : \uFFFF` Unicode hexadecimal
23. `\x00 : \xFF` ASCII hexadecimal
</p>

### These special characters describe the matching criterea of regular expressions
</details>
<details><summary>Write a regular expression to match a file extension of a file.txt ?</summary>
<p>

```JavaScript
const stringToSearch = "the text file text1.txt next text file text2.txt next of next text3.txt";
const regex = /(\w+)\.txt/g;

let matchedString = regex.exec(stringToSearch);
console.log(matchedString);
while (matchedString) {
    const fileName = matchedString[1];
    console.log(fileName);
    matchedString = regex.exec(stringToSearch);
}
```
</p>
</details>
<details><summary>How do regular expressions work? Extra notes</summary>
<p>

### Summary
* Regular Expressions terminate on the earliest match, not even if there is a better match later. Think of it what's it need to satisfy the term.
* Matches the left most word first earliest as possible. For instance in a string like `[race|racecar]` race will match first even if you only had the word `racecar`
* Try make regex pass. To build it so that it does not return characters you don't want runs slower, due to they way regex internals work and path traversal.  Trys every path in the state machine before it fails
</p>
</details>
<details><summary>Name the Regex Meta Syntax Character Classes? </summary>
<p>

### Meta Syntax is the commands of the language
* `( )` Indicates
* `[ ]`  Match a character set. Bit string lookup. Hash String lookup
#### loop syntax or repition options
 
* `+` Match 1 or more times.
* `*`  Match 0 or more times
* `?` optional
* `{3,7}` {min, max}. Match 3 to 7 or `{3,}` get at least three to infinity and `{3}` means match only three. Issues with upper bound and infinity. May cause exception or buffer overflow if you put in `{1,9999999999999999}`
any of the exception characters be greedy or non-greedy. By default, greedy. `?` Overloaded. (Duel meaning). so `a+?` makes it non-greedy.


* `/X*/`  match X as to infinity. Like a for loop.
* `\Q*****$\E`  Quoting. So you don't have to escape Metat characters if you really want to find them
* `.`  Any character. Might mean any character but not new lines.
* `\`  escape character
* `[^ABC]`   Flip the bits. Don't selct ABC `^` means don't do the characters inside the `[]`
* `|`  or A|B, A or B. Regex equivalent of if statement, two or more alternative paths
* `?` optional character
* `{ }`
* `-`   Any characters in this range
* `/[[:lower:][:digits:][:space:]]/` match lower digits and space . Requires double `[[]]`
* `&` And
* `[[:xdgit:]]` hexidecimal

### Examples
* `/xx*/` Match one x then match zero or more x's
 
</p>

</details>

### References
Mozilla.org: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Regex tester : https://regex101.com/