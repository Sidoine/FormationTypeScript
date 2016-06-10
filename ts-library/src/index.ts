import * as ko from 'knockout';

export function setIntervalWhen(callback:() => void, milliseconds: number, condition: ko.Subscribable<any>) {
    let handle:number;

    condition.subscribe(newValue => {
        if (newValue) {
            handle = setInterval(callback, milliseconds);
        }
        else{
            clearInterval(handle);
        }
    });

    if (condition()) {
        handle = setInterval(callback, milliseconds);
    }
}