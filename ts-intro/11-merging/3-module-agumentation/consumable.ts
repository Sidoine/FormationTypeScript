import { Observable } from "./observable";
import "./map";

let o = new Observable<number>(1.356);
console.log(o.map(x => x.toFixed(2)).get());