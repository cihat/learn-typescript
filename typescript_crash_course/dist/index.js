"use strict";
let id = 0;
id = 4;
const company = "chtslk";
let isPublished = true;
let x = "Hello";
let users = {
    company: "Github",
};
const ids = [1, 2, 3, 4];
// ids.push("hello")
const arr = [1, 3, 4, false];
arr.push("hello", 234, "test");
console.log(arr);
console.log("Id: ", id);
console.log("users company", users.company);
// tuple
let person = [1, "Brad", false];
// tuple array
let employee;
employee = [
    [1, "Hasan"],
    [2, "Mert"],
    [1, "test"],
];
//! Union
let pId;
pId = "22";
pId = 22;
console.log(pId);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: "Cihat",
};
// Type Assertion
let cid = "Hellooo";
// let customerId = <number>cid
let customerId = cid;
console.log(customerId);
function addNum(x, y) {
    return x + y;
}
console.log(addNum(23, 44));
//void
function log(message) {
    console.log(message);
}
log("hello");
const user1 = {
    id: 1,
    name: "Cihat",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(sub(1, 3));
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
// const mike = new Person(2, "Mike Jordan")
console.log(brad);
console.log(brad.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    getPosition() {
        return `${this.name} is a ${this.position}`;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp);
console.log(emp.getPosition());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
strArray.push("1"); // Throws error
console.log(strArray);
