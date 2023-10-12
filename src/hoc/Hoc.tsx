// high order function
// high order component

import { Component } from "react";

// 1. HOC (high order component)
// 2. render props
// 3. react hooks

// library ....
const addIncrement = (Comp: any) =>
  class IncrementReusedComp extends Component<{}, { counter: number }> {
    state = {
      counter: 0,
    };

    increment = () => {
      this.setState((p) => ({ counter: p.counter + 20 }));
    };

    decrement = () => {
      this.setState((p) => ({ counter: p.counter - 1 }));
    };

    render() {
      return (
        <Comp
          increment={this.increment}
          decrement={this.decrement}
          counter={this.state.counter}
        />
      );
    }
  };

// my code
export const Hoc = () => {
  return (
    <div>
      <Hoc1 />
      <Hoc2 />
      <Hoc3 />
      <Hoc4 />
    </div>
  );
};

const Hoc1 = addIncrement((props) => {
  return (
    <div>
      <div>{props.counter}</div>
      <button onClick={props.increment}>+</button>
    </div>
  );
});

const Hoc2 = addIncrement((props) => {
  return (
    <div>
      <SharedDiv/>
      <div>{props.counter}</div>
      <button onClick={props.decrement}>-</button>
    </div>
  );
});

const Hoc3 = addIncrement((props) => {
  return (
    <div>
      <SharedDiv/>
      <div>
        {props.counter} {props.counter} {props.counter}
      </div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
});

const Hoc4 = addIncrement((props) => {
  return (
    <div style={{ background: "red" }}>
      <div>{props.counter}</div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
});

const SharedDiv = () => {
  return <h1>shared div</h1>;
};
