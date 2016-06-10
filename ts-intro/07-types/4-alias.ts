namespace alias {
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    type Container<T> = { value: T };

    type LinkedList<T> = T & { next: LinkedList<T> };

    interface Person {
        name: string;
    }

    var people: LinkedList<Person>;
    var s = people.name;
    var s = people.next.name;
    var s = people.next.next.name;
    var s = people.next.next.next.name;
}