"use strict";

// printDelayed is a 'Promise<void>'
async function printDelayed(elements: string[]) {
    for (const element of elements) {
        await delay(200);
        console.log(element);
    }
}

async function delay(milliseconds: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function main() {
    await printDelayed(["Hello", "beautiful", "asynchronous", "world"]);
    console.log();
    await delay(1000);
    console.log("Printed every element!");
}

main();