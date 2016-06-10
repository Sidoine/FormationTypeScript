namespace typeguard {
    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    function getSmallPet(): Fish | Bird {
        return { fly: () => {}, layEggs: () => {} };
    }

    let pet = getSmallPet();

    // Each of these property accesses will cause an error
    // if (pet.swim) {
    //     pet.swim();
    // }
    // else if (pet.fly) {
    //     pet.fly();
    // }

    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }

    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }

    // typeof typeguard => déjà vu

    // instanceof typeguard
    interface Padder {
        getPaddingString(): string
    }

    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }

    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }

    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }

    // Type is 'SpaceRepeatingPadder | StringPadder'
    let padder: Padder = getRandomPadder();

    if (padder instanceof SpaceRepeatingPadder) {
        padder; // type narrowed to 'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // type narrowed to 'StringPadder'
    }
}