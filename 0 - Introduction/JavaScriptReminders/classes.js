class AuthDeclaration {
    constructor(authName, type) {
        this.authName = authName;
        this.type = type || '';
        this.book = [];
    }
    authName() {
        // created a method on the class
        console.log(`Authors Name: ${this.authName}`);
    }
    genre() {
        // created a method on the class. Can't call method same as variable;
        console.log(`I write ${this.type} type books.`);
        return this.type
    }
    static greet() {
        // only lives on the Declaration. Can't be accessed after new
        return (`Authors love to write, Coders love to code !!`);
    }
    get info() {
        return `Author: ${this.authName}, type: ${this.type}`;
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

StevenKing.books = 'It';
StevenKing.books = 'Christine';


console.log(StevenKing.genre());
console.log(StevenKing.info);
console.log(StevenKing.books)
console.log(HGWells.genre());
console.log(HGWells.books);
console.log(AuthDeclaration.greet()); // only works on the original class;

// Extends the auth class. Not the greatest example, but you get the picture.
// Used to inheret the original classes methods. 
// Need to call super which then uses the original class... Now look at the stack datatype.
class Coder extends AuthDeclaration {
    constructor(authName, language) {
        super(authName);
        this.language = language;
    }
    saying() {
        console.log(`I like to code it, code it... ${this.language}`)
    }

}

const fredFlintstone = new Coder('Fred Flintstone', 'JavaScript');
fredFlintstone.saying();
console.log(fredFlintstone.info)