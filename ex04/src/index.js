// Only change code below this line
class Pets {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
  walk() {
    let numberOfLegs = `${this.name} is walking on ${this.legs} legs`;
    return numberOfLegs;
  }
}

class Dog extends Pets {
  constructor(name, legs) {
    super(name, legs);
  }
  bark() {
    const dogSay = `${this.name} says WUF-WUF`;
    return dogSay;
  }
}

// Only change code above this line

const dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
