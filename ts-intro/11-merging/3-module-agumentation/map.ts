import { Observable } from "./observable";

// Create an augmentation for "./observable"
declare module "./observable" {

    // Augment the 'Observable' class definition with interface merging
    interface Observable<T> {
        map<U>(proj: (el: T) => U): Observable<U>;
    }

}

Observable.prototype.map = function<T, U>(proj: (el:T) => U) {
    return new Observable(proj((<Observable<T>> this).get()));
};