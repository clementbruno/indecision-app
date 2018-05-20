const add = (a,b) => {
    return a + b;
}

console.log(add(55,1));

const user = {
    name: 'Andrew',
    cities: ['NY', 'LDN', 'PARIS'],
    printPlacesVisited() {
        return this.cities.map((city) => `${this.name} has visited city`);
    }
};

console.log(user.printPlacesVisited());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() { 
        return this.numbers.map((n) => n * this.multiplyBy);
    }
}

console.log(multiplier.multiply());