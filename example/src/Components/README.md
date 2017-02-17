#Components

This is the index and documentation for the basic components.

###What Types of components are there?

We utilize two main types of components: dumb, or stateless, and container, or stateful. A dumb component is simply a function that returns JSX. These components do not extend the React.Component class so they do not have lifecycle hooks like ComponentWillMount, etc.

Example dumb component
```javascript
const foo = props => (
  <div>
    <h1>Hello World</h1>
  </div>
);
```

A container component will extend the React.Component class and will be able to handle state. A Container is meant to contain groups of dumb components as a means to dispatch state down to each section. Think of a container as a controller that directs data from the global state down to each component. Containers will also handle watching for events and sending event functions down to child components.

Example container component
```javascript
class Foo extends React.Component {

  constructor(props) { ... }

  // lifecycle hooks such as ComponentDidMount

  render () {

    return (
      <div>
        <Bar text="Hello World" onClick={ this.handleClick } />
      </div>
    );
  }
}
```
