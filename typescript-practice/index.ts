/* 
    Define a type for each variable.
*/
let age: number;
let firstName: string;
let sport: boolean;

age = 40;
firstName = 'David';
sport = true;

//* It can be any type.
let result: any;
result = 3;
result = true;

//* It is an object
//* We can define how is our object, and access to it
let person: {name: string, age: number};
person = {name: 'David', age: 5};
person.age = 15;
person.name = 'Franklin';

//* We can use it in methods/functions
function createPerson(age: number, name: string) {
    return {age, name}
}

let myFunction = createPerson(35, 'Joe');

//* We can create classes .
class Person {
    age: number;
    name: string;
}

let myClass = new Person();

//* Arrays
//* Array of ages (numbers only)
let ages: number[] = [];
ages.push(25)


//* TypeScript for Angular.
class MovieTypeOne {
    title: string;
    year: number;
    constructor (title: string, year: number) {
        this.title = title;
        this.year = year;
    }
}
//* Simplified Version
class MovieTypeTwo {
    constructor (private title: string, public year: number) {
    }

    formatTitle() {
        return this.title;
    }
}

let twilight = new MovieTypeTwo('Twilight', 2008)
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



console.log('hi')
