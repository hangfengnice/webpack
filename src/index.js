
import React,{Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return <div>hello world</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))




