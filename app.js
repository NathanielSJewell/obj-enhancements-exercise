//Old version
function createInstructor(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName
	};
}

//ES2015 version
function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName
	};
}

//Computed Property Names
// Old Version!
var favoriteNumber = 42;

var instructor = {
	firstName: 'Colt'
};

// instructor[favoriteNumber] = 'That is my favorite!';

// ES2015
let favoriteNumber = 42;
let instructor = {
	firstName: `Colt`,
	[favoriteNumber]: `That is my favorite!`
};

// Object Methods
// Old Version
var instructor = {
	firstName: 'Colt',
	sayHi: function() {
		return 'Hi!';
	},
	sayBye: function() {
		return this.firstName + ' says bye!';
	}
};

// ES2015 Version
let instructor = {
	firstName: `Colt`,
	sayHi() {
		return `Hi!`;
	},
	sayBye() {
		return this.firstName + ` says bye!`;
	}
};

//Use a computed property method.
//Write a function that returns an animal object. It should accept three arguments.

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		}
	};
}

const a = createAnimal(`cat`, `meow`, `purrrrrrr`);
