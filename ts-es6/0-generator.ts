"use strict";

function* testGenerator(){
    yield 18;
    yield 13;
    yield 12;
}

function* otherGenerator(){
    yield* testGenerator();
    yield 11;
}

for (let i of testGenerator()){
    console.log(i);
}

for (let i of otherGenerator()){
    console.log(i);
}