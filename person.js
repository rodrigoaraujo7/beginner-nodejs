class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello World! My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
