declare namespace JSX {
    interface IntrinsicElements {
        div: { title?: string; width?: number }
    }
    interface ElementAttributesProperty {
        props; // specify the property name to use
    }
}

class React{
    static createElement(element: any, parameters: any, ...children:any[]) {
        // ...
    }
}
