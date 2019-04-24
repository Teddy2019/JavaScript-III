/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1 --Window/Global Binding

/*==>>JavaScript has a global object that exists wherever JavaScript lives. Therefore if you call 'this' on
 global environment it points to window.
 */ 

// code example for Window Binding

console.log(this);

// Principle 2 --Implicit Binding

/*when a function with the 'this' key word is being called as a methode on some objects(parent obj), then the
 'this' key word points to the parent object where the function belonges*/

// code example for Implicit Binding

const person = {
    firstName: "Teddy",
    sayHey: function(){
        console.log(this);
        return this.firstName + " says hey!";
    }
};

person.sayHey();

// Principle 3 New Binding
/*whenever a constructor function used the 'this' key word points to the obeject that being created using the
constructore using 'new'*/
// code example for New Binding
class User {
    constructor(name) {
        this.name = name;
        this.Intro = function (property) { console.log('My name is ' + this.name + ' I am ' + property); };
    }
}

const newName = new User('Arsi');
newName.Intro('8 years old');

// Principle 4

/*Explicit binding of 'this' occurs when .call(), .apply(), or .bind() are used on a function.*/

// code example for Explicit Binding

//==>using the above constructor
const newProperty = {name: 'Mike', age: '9 years old'};
newName.Intro.call(newProperty, newProperty.age);