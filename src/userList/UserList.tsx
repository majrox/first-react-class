import { Component } from "react";
import styled from "styled-components";

const DivWrapper = styled.div({
  margin: "1rem",
});

type Props = {};
type State = {
  users: number[];
};

export class UserList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <DivWrapper>
        <div>
          <button
            onClick={() => {
              this.setState((p) => ({
                users: [Math.floor(Math.random() * 100000), ...p.users],
              }));
            }}
          >
            add user
          </button>
        </div>

        <div>
          {this.state.users.map((userId, index) => (
            <Item key={userId} userId={userId} index={index} />
          ))}
        </div>
      </DivWrapper>
    );
  }
}

type ItemProps = {
  index: number;
  userId: number;
};
type ItemState = {
  counter: number;
};
class Item extends Component<ItemProps, ItemState> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        {this.props.index}) {this.props.userId}
        <button
          onClick={() => {
            this.setState((p) => ({ counter: p.counter + 1 }));
          }}
        >
          {this.state.counter}
        </button>
      </div>
    );
  }
}
