
namespace TestReact {
    // Stateless Function Components in React

    // Use parameter destructuring and defaults for easy definition of 'props' type
    const Greeter = ({name = 'world'}) => <div>Hello, {name}!</div>;

    // Properties get validated
    let example = <Greeter name='TypeScript 1.8' />;
}