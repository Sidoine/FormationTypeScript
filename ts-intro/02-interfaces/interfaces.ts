// Sans interface
{
    function printLabel(labelledObj: { label: string }) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
}

//SEP
// On introduit une interface
{
    interface LabelledValue {
        label: string;
    }

    function printLabelAvecInterface(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabelAvecInterface(myObj);
}
    
//SEP
// Propriétés optionnelles
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

//SEP
// Cas des propriétés en trop lors d'une assignation 
let myOtherSquare = createSquare({ colour: "red", width: 100 });

//SEP
// Fonctions répondant à une interface
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

//SEP
// Interfaces indexables
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

//SEP
// Implémenter une interface avec une classe
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

//SEP
// Étendre une interface
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square: Square = { color: 'red', sideLength: 18, penWidth: 2 };
