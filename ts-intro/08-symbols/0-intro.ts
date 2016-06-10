namespace symbol {
    let sym1 = Symbol();

    let sym2 = Symbol("key"); // optional string key

    // Les symboles sont uniques et immutables
    let sym3 = Symbol("key");

    sym2 === sym3; // false, symbols are unique

    // Les symboles peuvent être utilisés comme clés de propriétés d'objet
    let obj = {
        [sym2]: "value"
    };

    console.log(obj[sym2]); // "value"

    const getClassNameSymbol = Symbol();

    class C {
        [getClassNameSymbol](){
        return "C";
        }
    }

    let c = new C();
    let className = c[getClassNameSymbol](); // "C"

    // Some pre-defined symbols
    Symbol.hasInstance
    Symbol.isConcatSpreadable
    Symbol.iterator
    //...
}
