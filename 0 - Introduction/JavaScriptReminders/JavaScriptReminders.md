## JavaScript Reminders
Start here for some interesting JavaScript code features.
This is a collection of code reminders. I use a lot of this to prompt my memory when I am looking to solve a particular problems.
Esentially it's just a collection of code snippets and patterns.

<details><summary>Whats a JavaScript closure ?</summary>
<p>

#### Think of it as a feature where the code remembers a variable. 

see ```closure.js```

</p>
</details>
<details><summary>Explain Prototypal Inheritance? What are the issues with modifying prototypes? What's the difference between prototypes and classes/ </summary>
<p>

####  Prototypal Inheritance
Inheritance is a code reuse mechanisim. Lets use Array an example. Array is a global object which has built in methods. These methods are built into the Array prototype. Everytime an array is created ``` let a = [1,2,3]``` , all the methods of the original prototype are copied or inherited by the new array `a`. Soe when using the method ```a.length``` we end up with a result in `3`. 
Modifying a the original prototype is not difficult. ```Array.prototype.yellow = function() { console.log ('yellow')}```, but not recommended. Some libraries my modify the prototype and your code may be broken with name space collisions.

```JavaScript
>Array.yellow()
Thrown:
TypeError: Array.yellow is not a function
> a.yellow()
yellow
```

Class inheritance is implemented on top of prototypal inheritance.

ES6 has two ways to implement a class. Class declarations and class expression.
```const Expression = class { }```

There are a few methods inside the class declaration. Constructor is manditory.
Basics of a class:
```JavaScript
class AuthDeclaration {
    constructor(authName, genre) {
        this.authName = authName;
        this.genre = genre;
        this.book = [];
    }
    authName() {
        // created a method on the class
        console.log(`Authors Name: ${this.authName}`);
    }
    genre() {
        // created a method on the class
        console.log(`I write ${this.genre} type books.`);
    }
    static greet() {
        // only lives on the Declaration. Can't be accessed after new
        return (`Authors love to write, Coders love to code !!`);
    }
    get info() {
        return `Author: ${this.authName}, Genre: ${this.genre}`;
    }
    set books(value) {
        // can't use name book, hence book as set value;
        // access this with author.books = "book name";
        this.book.push(value);
    }
    get books() {
        // have to have a get to see what was set
        return this.book;
    }
}
const StevenKing = new AuthDeclaration('Seven King', 'Horror');
const HGWells = new AuthDeclaration('H.G. Wells', 'Science Fiction');
```


</p>
</details>