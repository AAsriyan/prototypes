// class AgedPerson {
// 	printAge() {
// 		console.log(this.age);
// 	}
// }

// class Person extends AgedPerson {
// 	name = "Max";

// 	constructor() {
// 		super();
// 		this.age = 30;
// 	}

// 	greet() {
// 		console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
// 	}
// }

function Person() {
	this.age = 30;
	this.name = "Max";
}

Person.prototype.greet = function () {
	console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};

// Person.prototype = {
// 	printAge() {
// 		console.log(this.age);
// 	}
// };

// Person.prototype.printAge = function() {
// 	printAge() {
// 		console.log(this.age);
// 	}
// }
// };

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.dir(Object.prototype);

// const p = new Person();
// console.log(p);

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p));

const course = {
	title: "JavaScript - The Complete Guide",
	rating: 5
}; // new Object()

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(
	course,
	{
		...Object.getPrototypeOf(course),
		printRating: function () {
			console.log(`${this.rating}/5`);
		}
	},
	{
		name: {
			configurable: true,
			enumerable: true,
			value: "Max",
			writable: true
		}
	}
);

const student = Object.create({
	printProgress: function () {
		console.log(print.progress);
	}
});
student.name = "Max";
Object.defineProperty(student, "progress", {
	configurable: true,
	enumerable: true,
	value: 0.8,
	writable: false
});
console.log(student);
course.printRating();
