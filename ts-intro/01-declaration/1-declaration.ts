// Destructurer
let input = [1, 2];

//SEP
let [un, deux] = input;
console.log(un); // affiche 1
console.log(deux); // affiche 2

//SEP
// swap variables
[un, deux] = [deux, un];

//SEP
// Dans les paramètres d'une fonction
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([un, deux]);

//SEP
// ...
let [firstElement, ...rest] = [1, 2, 3, 4];
console.log(firstElement); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

//SEP
// Ignorer des valeurs
let [, secondValue, , fourth] = [1, 2, 3, 4];

//SEP
// Idem pour les objets
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let {a, b} = o;
({a, b} = {a: "baz", b: 101});

//SEP
// Renommer les propriétés :
let {a: newName1, b: newName2} = o;

//SEP
// À ne pas confondre avec :
{
    let {a, b}: {a: string, b: number} = o;
}

//SEP
// On peut avoir des valeurs par défaut :
function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
}

//SEP
// Et dans les paramètres d'une fonction :
type C = {a: string, b?: number}
function fonc({a, b}: C): void {
    // ...
}

//SEP
// Qui gère aussi les valeurs par défaut, soit sur la valeur elle-même :
function fDefault({a, b} = {a: "", b: 0}): void {
    // ...
}
fDefault(); // ok, default to {a: "", b: 0}

//SEP
//.. soit sur un des paramètres
function fDefault2({a, b = 0} = {a: ""}): void {
    // ...
}
fDefault2({a: "yes"}) // ok, default b = 0
fDefault2() // ok, default to {a: ""}, which then defaults b = 0
// fDefault2({}) // error, 'a' is required if you supply an argument

//SEP
// On peut aussi renommer les paramètres
function frename({a: nouveauNom, b }: { a: string, b: number }){
    console.debug(nouveauNom);
}
