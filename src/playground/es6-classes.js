class Person {
    constructor(name = 'no name provided', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ! I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let desc = super.getDescription();
        if (this.hasMajor()) {
            desc += ` He majors in ${this.major}`;
        }
        return desc;
    }

    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (!!this.homeLocation) {
            greeting += ` I live in ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Student("casper", 33, 'econ');
const you = new Student();
console.log(me, you.hasMajor());

const traveler = new Traveler("Bernard", 99, 'London');
const travelerTwo = new Traveler("bob", 99);
console.log(traveler.getGreeting(), travelerTwo.getGreeting());

