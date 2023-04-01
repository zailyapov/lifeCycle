import React from "react";

// пример 1

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// пример 2

class cycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return <div>Привет, мир!</div>;
  }
}



export default cycle
