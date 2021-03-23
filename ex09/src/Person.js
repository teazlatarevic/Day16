class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        return `personInfo: ${this.name, this.email, this.age}`;
    }
}
module.exports = Person;