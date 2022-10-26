/*
    Define a type for each variable.
*/
var age;
var firstName;
var sport;
age = 40;
firstName = 'David';
sport = true;
//* It can be any type.
var result;
result = 3;
result = true;
//* It is an object
//* We can define how is our object, and access to it
var person;
person = { name: 'David', age: 5 };
person.age = 15;
person.name = 'Franklin';
//* We can use it in methods/functions
function createPerson(age, name) {
    return { age: age, name: name };
}
var myFunction = createPerson(35, 'Joe');
//* We can create classes .
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var myClass = new Person();
//* Arrays
//* Array of ages (numbers only)
var ages = [];
ages.push(25);
//* TypeScript for Angular.
var MovieTypeOne = /** @class */ (function () {
    function MovieTypeOne(title, year) {
        this.title = title;
        this.year = year;
    }
    return MovieTypeOne;
}());
//* Simplified Version
var MovieTypeTwo = /** @class */ (function () {
    function MovieTypeTwo(title, year) {
        this.title = title;
        this.year = year;
    }
    MovieTypeTwo.prototype.formatTitle = function () {
        return this.title;
    };
    return MovieTypeTwo;
}());
var twilight = new MovieTypeTwo('Twilight', 2008);
twilight.formatTitle();
//* Decorators
//* Give metadata to a piece of code. It adds extra sintax and code.
//* A decorator tells Angular how to use that class
//* Our decorator will be use in the MyClass (what is follows), and it is the next constructor.
/*@Decorator()
class MyCass() {
    @PropertyDecorator() longTitle: string;
    constructor (@ParamDecorator() private title: string, public year: number) {
    }
}*/
console.log('hi');
