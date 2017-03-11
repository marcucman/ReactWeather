var names = ['Andy', 'Ben', 'Chase', 'Dan'];

// cycle with forEach
names.forEach(function (name) {
  console.log('forEach', name);
});

// use arrow function to replace an anonymous function
names.forEach((name) => {
  console.log('arrowFunc', name);
});

// if you fit it on one line, you don't need a code block {}
names.forEach((name) => console.log(name));

// when you define an arrow functions like this, the arrow points to whatever gets returned
var returnMe = (name) => name + '!';
console.log(returnMe('James')); // James!

// anonymous functions have a 'this' binding
// arrow functions take on their parent's 'this' binding

var personAnon = {
  name: 'John Stockton',
  greet: function () {
    names.forEach(function () { // THIS FAILS
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

personAnon.greet();

// do it with an arrow function to make it work
var personArrow = {
  name: 'John Stockton',
  greet: function () {
    names.forEach((name) => { // THIS WORKS
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

personArrow.greet();

// CHALLENGE
function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(3, 4));

var addExpression = (a, b) => a + b;

console.log(addExpression(9, 3));
