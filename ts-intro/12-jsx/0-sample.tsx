class MyComponent {
  render() {}

  props: {
    foo?: string;
  }
}
function MyFactoryFunction() {
  return { render: () => {} }
}

<MyComponent foo="bar" />; // ok
<MyFactoryFunction />; // ok
<div title="aaa" width={12} />