
import React from 'react';

interface CounterState {
  count: number;
}

export default class Counter extends React.Component {

  private readonly counterState:CounterState;

  constructor(props: any) {
    super(props);
    this.counterState = { count: 0 };
  }

  increment = () => {
    this.setState({
      count: (this.counterState.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.counterState.count - 1)
    });
  };

  render () {
    return (
      <div>
        <h1>{ this.counterState.count }</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}