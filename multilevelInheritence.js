class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Eats() {
    console.log("He/She eats");
  }
}
class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
  Studies() {
    console.log("He/She is studying");
  }
}
class Undergrad extends Student {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  subjectStudying() {
    console.log("The subject choosen is " + this.subject);
  }
}
let undergradStudent1 = new Undergrad("Muskan", 24, "Engineering");
console.log(undergradStudent1);
undergradStudent1.subjectStudying();
undergradStudent1.Studies();
undergradStudent1.Eats();
