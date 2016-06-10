// Booléens
let isDone: boolean = false;

//SEP

// Nombres
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//SEP

// Chaînes de caractères
let color: string = "blue";
name = 'red';

//SEP

let fullName: string = `Jean Jeannot`;
let age: number = 37;
let sentence: string = `Salut, mon nom est ${ fullName }.

J'aurai ${ age + 1 } ans le mois prochain.`

//SEP

// Tableaux
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//SEP
// Tuples
// Declaration d'un type tuple
let x: [string, number];
//SEP
// Initialisiation
x = ['hello', 10]; // OK
//SEP
// Exemple d'erreur
x = [10, 'hello']; // Error
//SEP
console.log(x[0].substr(1)); // OK
//SEP
console.log(x[1].substr(1)); // Erreur
//SEP
x[3] = 'world'; // OK, une string peut être assignée à (string | number)
//SEP
console.log(x[5].toString()); // OK, 'string' et 'number' ont tous les deux toString
//SEP
x[6] = true; // Erreur, boolean n'est pas (string | number)

//SEP
// Enum
enum Color {Red, Green, Blue};
let couleur: Color = Color.Green;
//SEP
enum NumberedColor {Red = 1, Green, Blue};
let couleurAvecNombre: NumberedColor = NumberedColor.Green;
//SEP
enum ManualColor {Red = 1, Green = 2, Blue = 4};
let couleurManuelle: ManualColor = ManualColor.Green;
//SEP
let colorName: string = Color[2];
console.debug(colorName);
//SEP
// Enum constants
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
//SEP
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

//SEP
// Any
let notSure: any = 4;
notSure = "en fait c'est peut-être une string";
notSure = false; // Ah non en fait c'est un booléen

//SEP
// Void
function warnUser(): void {
    alert("This is my warning message");
}

//SEP
// Assertion de types
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// Ou
strLength = (someValue as string).length;
