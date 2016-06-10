namespace functions {
    // Named function
    function add(x, y) {
        return x + y;
    }

    // Anonymous function
    let myAdd = function(x, y) { return x+y; };
    
    // Capturer des variables
    let z = 100;

    function addToZ(x, y) {
        return x + y + z;
    }
    
    // Les types
    function multiply(x: number, y: number): number {
        return x * y;
    }

    let myMultiply = function(x: number, y: number): number { return x * y; };
    
    // Écrire le type
    let myMultiplyExplicit: (bla: number, blu: number)=>number = function(x: number, y: number): number { return x+y; };
    
    // Paramètres par défaut et paramètres optionels
    function buildName(firstName: string, lastName?: string) {
        return firstName + " " + lastName;
    }

    let result1 = buildName("Bob");                  // error, too few parameters
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName("Bob", "Adams");         // ah, just right
    
    function buildNameWithDefault(firstName: string, lastName = "Smith") {
        return firstName + " " + lastName;
    }
    
    let result4 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
    let result5 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
    
    // Paramètres supplémentaires
    function buildLongName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    let employeeName = buildLongName("Joseph", "Samuel", "Lucas", "MacKinzie");
}