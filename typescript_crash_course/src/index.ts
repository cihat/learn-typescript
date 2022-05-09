let id: number = 0

id = 4

const company: string = "chtslk"
let isPublished: boolean = true
let x: any = "Hello"
let users = {
  company: "Github",
}

const ids: number[] = [1, 2, 3, 4]
// ids.push("hello")
const arr: any[] = [1, 3, 4, false]
arr.push("hello", 234, "test")
console.log(arr)

console.log("Id: ", id)
console.log("users company", users.company)

// tuple
let person: [number, string, boolean] = [1, "Brad", false]

// tuple array
let employee: [number, string][]

employee = [
  [1, "Hasan"],
  [2, "Mert"],
  [1, "test"],
]

//! Union
let pId: string | number
pId = "22"
pId = 22
console.log(pId)

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up)

// //! Objects

// const user: {
//   id: number
//   name: string
// } = {
//   id: 1,
//   name: "Cihat",
// }
// console.log(user.name)

type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: "Cihat",
}

// Type Assertion
let cid: any = "Hellooo"
// let customerId = <number>cid
let customerId = cid as number

console.log(customerId)

function addNum(x: number, y: number): number {
  return x + y
}

console.log(addNum(23, 44))

//void
function log(message: string | number): void {
  console.log(message)
}
log("hello")

// Interfaces
interface UserInterface {
  id: number
  name: string
}

const user1: UserInterface = {
  id: 1,
  name: "Cihat",
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

console.log(sub(1, 3))

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register(): string {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, "Brad Traversy")
// const mike = new Person(2, "Mike Jordan")

console.log(brad)
console.log(brad.register())

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }

  getPosition() {
    return `${this.name} is a ${this.position}`
  }
}

const emp = new Employee(3, "Shawn", "Developer")
console.log(emp)
console.log(emp.getPosition())

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["brad", "John", "Jill"])

strArray.push("1") // Throws error
console.log(strArray)
