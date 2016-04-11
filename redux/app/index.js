import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
  return {type: INCREMENT}
}

function decrement() {
  return {type: DECREMENT}
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = createStore(combineReducers({counter}))

@connect((state) => ({
  counter: state.counter
}), {
  increment,
  decrement
})
class Counter extends React.Component {
  render() {
    const {counter, increment, decrement} = this.props
    return (
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <div>{counter}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById('app')
);
