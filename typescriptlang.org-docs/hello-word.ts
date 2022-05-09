"use strict"

// This is an industrial-grade general-purpose greeter function:
function hello(person: string, date?: Date): void {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

hello("Brendan")
