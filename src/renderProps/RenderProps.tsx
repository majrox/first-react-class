// high order function
// high order component

import { Component } from "react";

// 1. HOC (high order component)
// 2. render props
// 3. react hooks

// library ....
class IncrementRenderProps extends Component<{}, { counter: number }> {
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
      <div>
        {
          // @ts-expect-error
          this.props.children({
            counter: this.state.counter,
            increment: this.increment,
            decrement: this.decrement,
          })
        }
      </div>
    );
  }
}

// my code
export const RenderProps = () => {
  return (
    <div>
      <h1>render props</h1>
      <IncrementRenderProps>
        {(props: any) => (
          <div>
            <div>{props.counter}</div>
            <button onClick={props.decrement}>-</button>
          </div>
        )}
      </IncrementRenderProps>

      <IncrementRenderProps>
        {(props: any) => (
          <div style={{ background: "blue" }}>
            <div>{props.counter}</div>
            <button onClick={props.increment}>+</button>
          </div>
        )}
      </IncrementRenderProps>
      <IncrementRenderProps>
        {(props: any) => (
          <div style={{ background: "green" }}>
            <div>{props.counter}</div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
          </div>
        )}
      </IncrementRenderProps>

      <IncrementRenderProps>
        {(props: any) => (
          <div>
            <div>
              {props.counter} {props.counter} {props.counter}
            </div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
          </div>
        )}
      </IncrementRenderProps>
    </div>
  );
};
