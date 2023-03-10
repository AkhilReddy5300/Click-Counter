import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">
          The Button has been clicked <span className="span"> {count} </span>
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
