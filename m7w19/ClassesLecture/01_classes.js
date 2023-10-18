// Before classes

const newStudentObject = {
    name: "Bryan",
    favHalloweenCandy: "Nerds",
    sayHello: function(){
        console.log(`Hello my name is ${this.name}, and my favourite halloween candy is ${this.favHalloweenCandy}!`)
    }
}
const anotherStudentObject = {
    name: "Luna",
    favHalloweenCandy: "Reese cups",
    sayHello: function(){
        console.log(`Hello my name is ${this.name}, and my favourite halloween candy is ${this.favHalloweenCandy}!`)
    }
}

// Classes

// class StudentObject {
//     // name
//     // favHalloweenCandy
//     constructor(name, favHalloweenCandy){
//         this.name = name
//         this.favHalloweenCandy = favHalloweenCandy
//     }
//     // sayHello <- method
//     sayHello(){
//         console.log(`Hello my name is ${this.name}, and my favourite halloween candy is ${this.favHalloweenCandy}!`)
//     }
// }
class StudentObject {
    // name
    // favHalloweenCandy
    constructor(name, favHalloweenCandy){
        this.name = name
        this.favHalloweenCandy = favHalloweenCandy
    }
    // sayHello <- method
    sayHello(){
        console.log(`Hello my name is ${this.name}, and my favourite halloween candy is ${this.favHalloweenCandy}!`)
    }
}

class CohortStudentObject extends StudentObject {
    constructor(name, favHalloweenCandy, cohort){
        super(name, favHalloweenCandy)
        this.cohort = cohort
    }
    sayHello(){
        console.log(`Hello my name is ${this.name}!`)
    }
}

const newStudent = new CohortStudentObject("Jeremy", "Rockets", "June 12")

newStudent.sayHello()

const newStudentInstance = new StudentObject("Alexander", "Sour Patch Kids")
// console.log(newStudentInstance.name)
newStudentInstance.sayHello()
// anotherStudentObject.sayHello()

// Inheritance
class Square {
    constructor(length){
        this.length = length;
    }
    area(){
        return this.length * this.length;
    }
}

const newSquare = new Square(3)
console.log(newSquare.area())

class Rectangle extends Square{
    constructor(length, width){
        // Fetch the property of the Square class
        // this.length = length;
        super(length);
        this.width = width;
    }
}
const newRectangle = new Rectangle(4,6)
class Triangle extends Rectangle{
    constructor(length, width){
        super(length, width);
    }
    area(){
        return this.width * this.length;
    }
}


console.log(newRectangle.area())