namespace generics {
 
    // Fonction prenant un générique   
    function identity<T>(arg: T): T {
        return arg;
    }
    
    let output = identity("myString");  // type of output will be 'string'
    
    // Déclaration de type
    let myIdentity: {<T>(arg: T): T} = identity;
    
    // Classes génériques
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
        
    // Contraintes
    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }
        
    // Type parameters as constraints
    function assign<T extends U, U>(target: T, source: U): T {
        for (let id in source) {
            target[id] = source[id];
        }
        return target;
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };
    assign(x, { b: 10, d: 20 });
    // assign(x, { e: 0 }); 
    
    // Factory
    class Test {
    }
    
    function create<T>(c: {new(): T; }): T {
        return new c();
    }
    
    let created = create(Test);    
}
