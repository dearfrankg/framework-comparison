import React from 'react'
import ReactDOM from 'react-dom'

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({ counter: this.state.counter + 1 });
    },

    decrement: function() {
        this.setState({ counter: this.state.counter - 1 });
    },

    render: function() {
        return (
          <div>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <div>{this.state.counter}</div>
          </div>
        )
    }
});

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);
