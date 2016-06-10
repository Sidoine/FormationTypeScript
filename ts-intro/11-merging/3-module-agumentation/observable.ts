export class Observable<T> {
    value: T;
    constructor(init?: T){
        this.value = init;
    }
    
    get(): T {
        return this.value;
    }
}