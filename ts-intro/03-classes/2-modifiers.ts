"use strict"

// Public est la valeur par défaut
class PublicAnimal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// private
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

// new Animal("Cat").name; // Error: 'name' is private;

class Rhino extends Animal {
constructor() { super("Rhino"); }
}

class Plant {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let plant = new Plant("Bob");

animal = rhino;
// animal = plant; // Les privates ne sont pas considérés comme compatibles s'ils ont une origine différente

// protected
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

// Propriétés déclaréees dans les paramètres du constructeur
class NewAnimal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
