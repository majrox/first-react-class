import React from "react";


export class MyStateComp extends React.Component {
    state = {
        name: "Kuba",
        value: ""
    }
    render() {
        return <div>
            <h1>Hello {this.state.name}
            {this.state.value}
            </h1>

            <input type='text'
            onChange={(e) => {
                this.setState({
                    value: e.target.value,
                })
            }}
            value={this.state.value}/>
        <button
            onClick={()=> {

            }}
            >btn</button>
        </div>
    }
}