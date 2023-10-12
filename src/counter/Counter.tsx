import { Buttons } from "./Buttons";
import { Component } from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  margin: 20px;

  :hover {
    background: green;
  }
`;

const H1TheFirst = styled.h1({
  background: "red",
  color: "white",
});

const H1TheSec = styled.h1`
  background: blue;
  color: white;
`;

const DivCounter = styled.div({
  display: "flex",
  justifyContent: "space-evenly",
});

type State = {
  counter: number;
};

type Props = {
  className?: string;
};

export class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
  }

  // arrow fn
  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  // method => bind(this)
  decrement() {
    this.setState((p) => ({ counter: p.counter - 1 }));
  }

  render() {
    return (
      <DivWrapper className={this.props.className}>
        <H1TheFirst>Counter app</H1TheFirst>
        <H1TheSec>Counter app</H1TheSec>

        <Buttons increment={this.increment} decrement={this.decrement} />

        {/* {Array.from({ length: 1000 }, (_, i) => ( */}
        <DivCounter>{this.state.counter}</DivCounter>
        {/* ))} */}
      </DivWrapper>
    );
  }
}
