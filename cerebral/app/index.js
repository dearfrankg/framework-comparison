import React from 'react'
import ReactDOM from 'react-dom'
import Model from 'cerebral-model-baobab'
import Controller from 'cerebral'
import {Container} from 'cerebral-view-react'
import {Decorator as Cerebral} from 'cerebral-view-react'

///////////////////////////////////
// Components
//
@Cerebral({
  count: ['counter', 'count']
})
class App extends React.Component {
  render() {
    const {count} = this.props
    const {incButtonClicked, decButtonClicked} = this.props.signals.counter
    return (
      <div>
        <button onClick={() => decButtonClicked() }>-</button>
        <button onClick={() => incButtonClicked() }>+</button>
        <div>{count}</div>
      </div>
    )
  }
}

///////////////////////////////////
// modules
//
function increment({state}) {
  state.set(['counter', 'count'], state.get(['counter', 'count']) + 1)
}

function decrement({state}) {
  state.set(['counter', 'count'], state.get(['counter', 'count']) - 1)
}

const incButtonClicked = [ increment ]
const decButtonClicked = [ decrement ]

const Counter = (options = {}) => {
  return (module) => {

    module.addState({
      count: 0
    });

    module.addSignals({
      incButtonClicked,
      decButtonClicked
    });

  }
}

///////////////////////////////////
// main
//
const controller = Controller(Model({}))

controller.addModules({
  counter: Counter()
})

ReactDOM.render(
  <Container controller={controller}>
    <App/>
  </Container>,
  document.getElementById('app')
)
