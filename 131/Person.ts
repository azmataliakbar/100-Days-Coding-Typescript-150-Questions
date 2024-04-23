// In file: Person.ts
export class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`\nHello, my name is ${this.name}`);
  }
}
// Exports the Person class